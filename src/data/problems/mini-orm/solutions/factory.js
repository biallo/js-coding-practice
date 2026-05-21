function clone(record) {
  return { ...record };
}

function matchesWhere(record, where = {}) {
  return Object.entries(where).every(([key, value]) => record[key] === value);
}

function createDelegate(initialRecords) {
  const records = initialRecords.map(clone);

  function findOneIndex(where) {
    return records.findIndex((record) => matchesWhere(record, where));
  }

  return {
    findMany(args = {}) {
      const { where = {} } = args;
      return records.filter((record) => matchesWhere(record, where)).map(clone);
    },

    create({ data }) {
      const created = clone(data);
      records.push(created);
      return clone(created);
    },

    update({ where, data }) {
      const index = findOneIndex(where);
      const updated = { ...records[index], ...data };
      records[index] = updated;
      return clone(updated);
    },

    delete({ where }) {
      const index = findOneIndex(where);
      const [deleted] = records.splice(index, 1);
      return clone(deleted);
    },
  };
}

export default class MiniORM {
  constructor(data) {
    for (const [modelName, records] of Object.entries(data)) {
      this[modelName] = createDelegate(records);
    }
  }
}
