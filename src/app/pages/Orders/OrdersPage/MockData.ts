import { Order, OrderStatus } from "../../../../models/Order";
import { Item, ItemStatus } from "../../../../models/Item";
import { v4 as uuidV4 } from "uuid";

const getNewItem = () => {
  const item: Item = {
    id: uuidV4(),
    name: "Chicken breast bla bla bla bla",
    brand: "Hormel lalssd lsss",
    priceInUsd: 50,
    status: ItemStatus.Missing,
  };

  return item;
};

export const MockData: Record<string, Order> = {
  "32457ABC": {
    id: "32457ABC",
    shippingDate: new Date(),
    deppartment: "300-444-678",
    status: OrderStatus["Waiting to Approval"], // should be an enum with mapping
    supplier: "East coast fruits & vegteables", // should be an enum with mapping
    items: [getNewItem(), getNewItem()],
  },
};
