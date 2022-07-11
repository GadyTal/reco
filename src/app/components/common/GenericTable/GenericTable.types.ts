export interface RowAction<T> {
  handler: (model: T) => void;
  renderAction: (model: T) => JSX.Element;
}

export interface TableColumn<T> {
  header: keyof T;
  width?: number;
  renderCell?: (model: T) => JSX.Element;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  rowActions?: RowAction<T>[];
}