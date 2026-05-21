type Row = Record<string, unknown>

type FindManyArgs = {
  where?: Row
}

type WriteArgs = {
  data: Row
}

type WhereArgs = {
  where: Row
}

type UpdateArgs = WhereArgs & WriteArgs

function clone(record: Row): Row {
  return { ...record };
}

function matchesWhere(record: Row, where: Row = {}): boolean {
  return Object.entries(where).every(([key, value]) => record[key] === value);
}

class ModelDelegate {
  private records: Row[];

  constructor(records: Row[]) {
    this.records = records.map(clone);
  }

  findMany(args: FindManyArgs = {}): Row[] {
    const { where = {} } = args;
    return this.records.filter((record) => matchesWhere(record, where)).map(clone);
  }

  create({ data }: WriteArgs): Row {
    const created = clone(data);
    this.records.push(created);
    return clone(created);
  }

  update({ where, data }: UpdateArgs): Row {
    const index = this.records.findIndex((record) => matchesWhere(record, where));
    const updated = { ...this.records[index], ...data };
    this.records[index] = updated;
    return clone(updated);
  }

  delete({ where }: WhereArgs): Row {
    const index = this.records.findIndex((record) => matchesWhere(record, where));
    const [deleted] = this.records.splice(index, 1);
    return clone(deleted);
  }
}

export default class MiniORM {
  [modelName: string]: ModelDelegate;

  constructor(data: Record<string, Row[]>) {
    for (const [modelName, records] of Object.entries(data)) {
      this[modelName] = new ModelDelegate(records);
    }
  }
}
