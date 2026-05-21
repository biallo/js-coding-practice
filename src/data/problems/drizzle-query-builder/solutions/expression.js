export function integer(name) {
  return { name, kind: 'integer' };
}

export function text(name) {
  return { name, kind: 'text' };
}

export function table(name, columns) {
  const result = { _name: name };

  for (const [key, column] of Object.entries(columns)) {
    result[key] = { ...column, tableName: name };
  }

  return result;
}

export function eq(left, right) {
  return { type: 'eq', left, right };
}

export function and(...conditions) {
  return { type: 'and', conditions };
}

export function or(...conditions) {
  return { type: 'or', conditions };
}

export function asc(column) {
  return { column, direction: 'asc' };
}

export function desc(column) {
  return { column, direction: 'desc' };
}

function clone(row) {
  return { ...row };
}

function evaluate(condition, row) {
  switch (condition.type) {
    case 'eq':
      return row[condition.left.name] === condition.right;
    case 'and':
      return condition.conditions.every((child) => evaluate(child, row));
    case 'or':
      return condition.conditions.some((child) => evaluate(child, row));
    default:
      return true;
  }
}

function compareRows(orderings, rowA, rowB) {
  for (const ordering of orderings) {
    const valueA = rowA[ordering.column.name];
    const valueB = rowB[ordering.column.name];

    if (valueA === valueB) {
      continue;
    }

    const result = valueA < valueB ? -1 : 1;
    return ordering.direction === 'asc' ? result : -result;
  }

  return 0;
}

class QueryBuilder {
  constructor(data) {
    this.data = data;
    this.table = null;
    this.condition = null;
    this.orderings = [];
    this.limitCount = null;
    this.offsetCount = 0;
  }

  from(tableObject) {
    this.table = tableObject;
    return this;
  }

  where(condition) {
    this.condition = condition;
    return this;
  }

  orderBy(...orderings) {
    this.orderings = orderings;
    return this;
  }

  limit(count) {
    this.limitCount = count;
    return this;
  }

  offset(count) {
    this.offsetCount = count;
    return this;
  }

  all() {
    let rows = [...(this.data[this.table._name] ?? [])];

    if (this.condition !== null) {
      rows = rows.filter((row) => evaluate(this.condition, row));
    }

    if (this.orderings.length > 0) {
      rows.sort((rowA, rowB) => compareRows(this.orderings, rowA, rowB));
    }

    rows = rows.slice(this.offsetCount);

    if (this.limitCount !== null) {
      rows = rows.slice(0, this.limitCount);
    }

    return rows.map(clone);
  }
}

export function drizzle(data) {
  const storedData = {};

  for (const [tableName, rows] of Object.entries(data)) {
    storedData[tableName] = rows.map(clone);
  }

  return {
    select() {
      return new QueryBuilder(storedData);
    },
  };
}
