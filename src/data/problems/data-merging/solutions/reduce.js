export default function mergeData(sessions) {
  return sessions.reduce(
    (accumulator, session) => {
      const existingIndex = accumulator.indexesByUser.get(session.user);

      if (existingIndex === undefined) {
        accumulator.indexesByUser.set(session.user, accumulator.result.length);
        accumulator.result.push({
          user: session.user,
          duration: session.duration,
          equipment: [...session.equipment],
        });
        return accumulator;
      }

      const existingSession = accumulator.result[existingIndex];
      existingSession.duration += session.duration;
      existingSession.equipment = Array.from(
        new Set([...existingSession.equipment, ...session.equipment]),
      ).sort();

      return accumulator;
    },
    { result: [], indexesByUser: new Map() },
  ).result.map((session) => ({
    ...session,
    equipment: [...session.equipment].sort(),
  }));
}
