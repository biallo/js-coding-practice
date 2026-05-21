function clone(record) {
  return { ...record };
}

function matchesWhere(record, where = {}) {
  return Object.entries(where).every(([key, value]) => record[key] === value);
}

class ModelDelegate {
  constructor(records) {
    this.records = records.map(clone);
  }

  findMany(args = {}) {
    const { where = {} } = args;
    return this.records.filter((record) => matchesWhere(record, where)).map(clone);
  }

  create({ data }) {
    const created = clone(data);
    this.records.push(created);
    return clone(created);
  }

  update({ where, data }) {
    const index = this.records.findIndex((record) => matchesWhere(record, where));
    const updated = { ...this.records[index], ...data };
    this.records[index] = updated;
    return clone(updated);
  }

  delete({ where }) {
    const index = this.records.findIndex((record) => matchesWhere(record, where));
    const [deleted] = this.records.splice(index, 1);
    return clone(deleted);
  }
}

export default class MiniORM {
  constructor(data) {
    for (const [modelName, records] of Object.entries(data)) {
      this[modelName] = new ModelDelegate(records);
    }
  }
}
