export function integer(name) {
  return { name, kind: 'integer' };
}

export function text(name) {
  return { name, kind: 'text' };
}

export function table(name, columns) {
  return Object.entries(columns).reduce(
    (tableObject, [key, column]) => {
      tableObject[key] = { ...column, tableName: name };
      return tableObject;
    },
    { _name: name },
  );
}

export function eq(left, right) {
  return (row) => row[left.name] === right;
}

export function and(...conditions) {
  return (row) => conditions.every((condition) => condition(row));
}

export function or(...conditions) {
  return (row) => conditions.some((condition) => condition(row));
}

export function asc(column) {
  return { column, direction: 1 };
}

export function desc(column) {
  return { column, direction: -1 };
}

function clone(row) {
  return { ...row };
}

function compare(orderings, rowA, rowB) {
  for (const { column, direction } of orderings) {
    if (rowA[column.name] === rowB[column.name]) {
      continue;
    }

    return (rowA[column.name] < rowB[column.name] ? -1 : 1) * direction;
  }

  return 0;
}

class QueryBuilder {
  constructor(data) {
    this.data = data;
    this.table = null;
    this.predicate = null;
    this.orderings = [];
    this.start = 0;
    this.count = undefined;
  }

  from(tableObject) {
    this.table = tableObject;
    return this;
  }

  where(condition) {
    this.predicate = condition;
    return this;
  }

  orderBy(...orderings) {
    this.orderings = orderings;
    return this;
  }

  limit(count) {
    this.count = count;
    return this;
  }

  offset(count) {
    this.start = count;
    return this;
  }

  all() {
    let rows = [...(this.data[this.table._name] ?? [])];

    if (this.predicate !== null) {
      rows = rows.filter(this.predicate);
    }

    if (this.orderings.length > 0) {
      rows.sort((rowA, rowB) => compare(this.orderings, rowA, rowB));
    }

    return rows.slice(this.start, this.count === undefined ? undefined : this.start + this.count).map(clone);
  }
}

export function drizzle(data) {
  const storedData = Object.fromEntries(
    Object.entries(data).map(([tableName, rows]) => [tableName, rows.map(clone)]),
  );

  return {
    select() {
      return new QueryBuilder(storedData);
    },
  };
}
