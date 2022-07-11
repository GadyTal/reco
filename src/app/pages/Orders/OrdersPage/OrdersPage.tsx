import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { getOrder, orderTableColumns } from "../OrdersPage/OrderPage.helpers";
import {
  OrderPageContainer,
  TableContainer,
} from "../OrdersPage/OrdersPage.styles";
import { useEffect, useState } from "react";
import { Order } from "../../../../models/Order";
import { GenericTable } from "../../../components/common/GenericTable/GenericTable";
import { TitleArea } from "../../../components/common/TitleArea/TitleArea";
import { RowAction } from "../../../components/common/GenericTable/GenericTable.types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { orderSlice } from "../../../../store/reducers/order/orderSlice";
import { ItemStatus, Item } from "../../../../models/Item";

const orderId = "32457ABC"; // Mock routing id param

export const OrderPage = () => {
  const [currentOrder, setCurrentOrder] = useState<Order>();
  const reduxOrder = useAppSelector((state) => state.orders.entities[orderId]);
  const dispatch = useAppDispatch();
  const { UpdateOrder, SetAllOrders } = orderSlice.actions;

  useEffect(() => {
    const fetchData = async () => {
      const order = await getOrder(orderId);
      setCurrentOrder(order);
      SetAllOrders([order]);
    };

    fetchData();
  }, [orderId]);

  useEffect(() => {
    setCurrentOrder(reduxOrder);
  }, [reduxOrder]);

  const updateItemStatus = (itemStatus: ItemStatus, itemId: string) => {
    const updatedOrder = { ...(currentOrder as Order) };
    const index = currentOrder!.items.findIndex((item) => item.id == itemId);
    const updatedItems = [...updatedOrder.items];
    updatedItems[index] = { ...updatedItems[index], status: itemStatus };
    updatedOrder.items = updatedItems;
    dispatch(UpdateOrder(updatedOrder));
  };

  const orderTablerowActions: RowAction<Item>[] = [
    {
      handler: (model) => {
        updateItemStatus(ItemStatus.NotMissing, model.id);
      },
      renderAction: (model) => <CheckIcon />,
    },
    {
      handler: (model) => {
        updateItemStatus(ItemStatus.Missing, model.id);
      },
      renderAction: (model) => <ClearIcon />,
    },
  ];

  return (
    <OrderPageContainer>
      {currentOrder ? (
        <>
          <TitleArea id={currentOrder.id} status={currentOrder.status} />
          <TableContainer>
            <GenericTable<Item>
              data={currentOrder.items}
              columns={orderTableColumns}
              rowActions={orderTablerowActions}
            />
          </TableContainer>
        </>
      ) : (
        <>Loading...</>
      )}
    </OrderPageContainer>
  );
};
