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

type ModelDelegate = {
  findMany: (args?: FindManyArgs) => Row[]
  create: (args: WriteArgs) => Row
  update: (args: UpdateArgs) => Row
  delete: (args: WhereArgs) => Row
}

function clone(record: Row): Row {
  return { ...record };
}

function matchesWhere(record: Row, where: Row = {}): boolean {
  return Object.entries(where).every(([key, value]) => record[key] === value);
}

function createDelegate(initialRecords: Row[]): ModelDelegate {
  const records = initialRecords.map(clone);

  function findOneIndex(where: Row): number {
    return records.findIndex((record) => matchesWhere(record, where));
  }

  return {
    findMany(args: FindManyArgs = {}): Row[] {
      const { where = {} } = args;
      return records.filter((record) => matchesWhere(record, where)).map(clone);
    },

    create({ data }: WriteArgs): Row {
      const created = clone(data);
      records.push(created);
      return clone(created);
    },

    update({ where, data }: UpdateArgs): Row {
      const index = findOneIndex(where);
      const updated = { ...records[index], ...data };
      records[index] = updated;
      return clone(updated);
    },

    delete({ where }: WhereArgs): Row {
      const index = findOneIndex(where);
      const [deleted] = records.splice(index, 1);
      return clone(deleted);
    },
  };
}

export default class MiniORM {
  [modelName: string]: ModelDelegate;

  constructor(data: Record<string, Row[]>) {
    for (const [modelName, records] of Object.entries(data)) {
      this[modelName] = createDelegate(records);
    }
  }
}
