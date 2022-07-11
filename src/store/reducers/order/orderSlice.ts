import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Order } from "../../../models/Order";

const entityAdapter = createEntityAdapter<Order>({
  selectId: (model) => model.id,
});
const { upsertOne, setAll, getInitialState } = entityAdapter;

export const orderSlice = createSlice({
  name: "order",
  initialState: getInitialState(),
  reducers: {
    UpdateOrder: (state, action: PayloadAction<Order>) => {
      upsertOne(state, action.payload);
    },
    SetAllOrders: (state, { payload }: PayloadAction<Order[]>) => {
      setAll(state, payload);
    },
  },
});

export default orderSlice.reducer;
