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

type Condition = (row: Row) => boolean

type Ordering = {
  column: Column
  direction: 1 | -1
}

export function integer(name: string): Column {
  return { name, kind: 'integer' };
}

export function text(name: string): Column {
  return { name, kind: 'text' };
}

export function table(name: string, columns: Record<string, Column>): TableObject {
  return Object.entries(columns).reduce<TableObject>(
    (tableObject, [key, column]) => {
      tableObject[key] = { ...column, tableName: name };
      return tableObject;
    },
    { _name: name },
  );
}

export function eq(left: Column, right: unknown): Condition {
  return (row) => row[left.name] === right;
}

export function and(...conditions: Condition[]): Condition {
  return (row) => conditions.every((condition) => condition(row));
}

export function or(...conditions: Condition[]): Condition {
  return (row) => conditions.some((condition) => condition(row));
}

export function asc(column: Column): Ordering {
  return { column, direction: 1 };
}

export function desc(column: Column): Ordering {
  return { column, direction: -1 };
}

function clone(row: Row): Row {
  return { ...row };
}

function compare(orderings: Ordering[], rowA: Row, rowB: Row): number {
  for (const { column, direction } of orderings) {
    const valueA = rowA[column.name] as number | string;
    const valueB = rowB[column.name] as number | string;

    if (valueA === valueB) {
      continue;
    }

    return (valueA < valueB ? -1 : 1) * direction;
  }

  return 0;
}

class QueryBuilder {
  private tableObject: TableObject | null = null;
  private predicate: Condition | null = null;
  private orderings: Ordering[] = [];
  private start = 0;
  private count: number | undefined;

  constructor(private data: Record<string, Row[]>) {}

  from(tableObject: TableObject): this {
    this.tableObject = tableObject;
    return this;
  }

  where(condition: Condition): this {
    this.predicate = condition;
    return this;
  }

  orderBy(...orderings: Ordering[]): this {
    this.orderings = orderings;
    return this;
  }

  limit(count: number): this {
    this.count = count;
    return this;
  }

  offset(count: number): this {
    this.start = count;
    return this;
  }

  all(): Row[] {
    const tableName = this.tableObject?._name ?? '';
    let rows = [...(this.data[tableName] ?? [])];

    if (this.predicate !== null) {
      rows = rows.filter(this.predicate);
    }

    if (this.orderings.length > 0) {
      rows.sort((rowA, rowB) => compare(this.orderings, rowA, rowB));
    }

    const end = this.count === undefined ? undefined : this.start + this.count;
    return rows.slice(this.start, end).map(clone);
  }
}

export function drizzle(data: Record<string, Row[]>) {
  const storedData = Object.fromEntries(
    Object.entries(data).map(([tableName, rows]) => [tableName, rows.map(clone)]),
  );

  return {
    select() {
      return new QueryBuilder(storedData);
    },
  };
}
