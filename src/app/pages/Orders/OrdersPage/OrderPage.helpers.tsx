import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { MockData } from "./MockData";
import { Order } from "../../../../models/Order";
import {
  RowAction,
  TableColumn,
} from "../../../components/common/GenericTable/GenericTable.types";
import { Item, ItemStatus } from "../../../../models/Item";

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

export const getOrderTablerowActions = (updateItemStatus: (itemStatus: ItemStatus, itemId: string) => void): RowAction<Item>[] => [
  {
    handler: (model) => {
      updateItemStatus(
        model.status === ItemStatus.Missing
          ? ItemStatus.NotMissing
          : ItemStatus.Missing,
        model.id
      );
    },
    renderAction: (model) =>
      model.status === ItemStatus.Missing ? <CheckIcon /> : <ClearIcon />,
  },
];