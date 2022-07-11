export interface Item {
  id: string;
  name: string;
  brand: string; // should be an enum with mapping
  priceInUsd: number;
  status: ItemStatus;
}

export interface ItemInOrder extends Item {
  quanitity: number;
  total: number;
}

export enum ItemStatus {
  "Missing" = "Missing",
  "NotMissing" = "NotMissing",
}
