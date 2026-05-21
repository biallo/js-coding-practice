type Row = Record<string, unknown>

type Column = {
  name: string
  kind: 'integer' | 'text'
  tableName?: string
}

type TableObject = {
  _name: string
  [columnName: string]: string | Column
}

type Condition =
  | { type: 'eq'; left: Column; right: unknown }
  | { type: 'and'; conditions: Condition[] }
  | { type: 'or'; conditions: Condition[] }

type Ordering = {
  column: Column
  direction: 'asc' | 'desc'
}

export function integer(name: string): Column {
  return { name, kind: 'integer' };
}

export function text(name: string): Column {
  return { name, kind: 'text' };
}

export function table(name: string, columns: Record<string, Column>): TableObject {
  const result: TableObject = { _name: name };

  for (const [key, column] of Object.entries(columns)) {
    result[key] = { ...column, tableName: name };
  }

  return result;
}

export function eq(left: Column, right: unknown): Condition {
  return { type: 'eq', left, right };
}

export function and(...conditions: Condition[]): Condition {
  return { type: 'and', conditions };
}

export function or(...conditions: Condition[]): Condition {
  return { type: 'or', conditions };
}

export function asc(column: Column): Ordering {
  return { column, direction: 'asc' };
}

export function desc(column: Column): Ordering {
  return { column, direction: 'desc' };
}

function clone(row: Row): Row {
  return { ...row };
}

function evaluate(condition: Condition, row: Row): boolean {
  switch (condition.type) {
    case 'eq':
      return row[condition.left.name] === condition.right;
    case 'and':
      return condition.conditions.every((child) => evaluate(child, row));
    case 'or':
      return condition.conditions.some((child) => evaluate(child, row));
  }
}

function compareRows(orderings: Ordering[], rowA: Row, rowB: Row): number {
  for (const ordering of orderings) {
    const valueA = rowA[ordering.column.name] as number | string;
    const valueB = rowB[ordering.column.name] as number | string;

    if (valueA === valueB) {
      continue;
    }

    const result = valueA < valueB ? -1 : 1;
    return ordering.direction === 'asc' ? result : -result;
  }

  return 0;
}

class QueryBuilder {
  private tableObject: TableObject | null = null;
  private condition: Condition | null = null;
  private orderings: Ordering[] = [];
  private limitCount: number | null = null;
  private offsetCount = 0;

  constructor(private data: Record<string, Row[]>) {}

  from(tableObject: TableObject): this {
    this.tableObject = tableObject;
    return this;
  }

  where(condition: Condition): this {
    this.condition = condition;
    return this;
  }

  orderBy(...orderings: Ordering[]): this {
    this.orderings = orderings;
    return this;
  }

  limit(count: number): this {
    this.limitCount = count;
    return this;
  }

  offset(count: number): this {
    this.offsetCount = count;
    return this;
  }

  all(): Row[] {
    const tableName = this.tableObject?._name ?? '';
    let rows = [...(this.data[tableName] ?? [])];

    if (this.condition !== null) {
      rows = rows.filter((row) => evaluate(this.condition as Condition, row));
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

export function drizzle(data: Record<string, Row[]>) {
  const storedData: Record<string, Row[]> = {};

  for (const [tableName, rows] of Object.entries(data)) {
    storedData[tableName] = rows.map(clone);
  }

  return {
    select() {
      return new QueryBuilder(storedData);
    },
  };
}
