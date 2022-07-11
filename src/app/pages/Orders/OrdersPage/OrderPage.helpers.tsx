import React from "react";
import { MockData } from "./MockData";
import { Order } from "../../../../models/Order";
import {
  TableColumn,
} from "../../../components/common/GenericTable/GenericTable.types";
import { Item } from "../../../../models/Item";

export const getOrder = async (orderId: string) => {
  return Promise.resolve(MockData[orderId] as Order);
};

export const orderTableColumns: TableColumn<Item>[] = [
  { header: "id" },
  { header: "name" },
  { header: "brand" },
  { header: "priceInUsd" },
  { header: "status", renderCell: (model) => <>{model.status}</> , width: 100},
];
