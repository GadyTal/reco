import { Item } from "./Item";

export interface Order {
  id: string;
  shippingDate: Date;
  deppartment: string;
  status: OrderStatus;
  supplier: string; // should be an enum with mapping
  items: Item[];
}

export enum OrderStatus {
  "Waiting to Approval" = "Waiting to Approval",
  "Approved" = "Approved"
}
