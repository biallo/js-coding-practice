export default function runTasks(tasks, concurrency = Infinity) {
  return new Promise((resolve, reject) => {
    const byId = new Map(tasks.map((task) => [task.id, task]));
    const dependents = new Map();
    const remainingDeps = new Map();
    const results = {};
    const ready = [];
    let completed = 0;
    let running = 0;
    let rejected = false;

    for (const task of tasks) {
      remainingDeps.set(task.id, task.deps.length);

      if (task.deps.length === 0) {
        ready.push(task);
      }

      for (const dep of task.deps) {
        if (!byId.has(dep)) {
          reject(new Error(`Missing dependency: ${dep}`));
          return;
        }

        if (!dependents.has(dep)) {
          dependents.set(dep, []);
        }

        dependents.get(dep).push(task.id);
      }
    }

    function schedule() {
      if (rejected) {
        return;
      }

      if (completed === tasks.length) {
        resolve(results);
        return;
      }

      while (running < concurrency && ready.length > 0) {
        const task = ready.shift();
        running += 1;

        Promise.resolve()
          .then(task.run)
          .then((result) => {
            results[task.id] = result;
            completed += 1;
            running -= 1;

            for (const dependentId of dependents.get(task.id) ?? []) {
              const nextCount = remainingDeps.get(dependentId) - 1;
              remainingDeps.set(dependentId, nextCount);

              if (nextCount === 0) {
                ready.push(byId.get(dependentId));
              }
            }

            schedule();
          }, (error) => {
            rejected = true;
            reject(error);
          });
      }

      if (!rejected && running === 0 && ready.length === 0 && completed < tasks.length) {
        rejected = true;
        reject(new Error('Cycle detected'));
      }
    }

    schedule();
  });
}
