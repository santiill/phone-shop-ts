import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {adminRequests} from "./adminApi";
import {executeOrderData} from "../../type/objTypes";

export interface AuthState {
    status: 'success' | 'loading' | 'failed';
    allOrders: [];
}

const initialState: AuthState = {
    status: 'success',
    allOrders: [],
};

export const getAllAdminOrders = createAsyncThunk(
    'adminOrder/getAllOrders',
    async () => {
        const response = await adminRequests.orders.getAll();
        return response.data;
    }
);

export const executeOrder = createAsyncThunk(
    'adminOrder/executeOrder',
    async (data: executeOrderData, {dispatch}) => {
        const response = await adminRequests.orders.execute(data);
        dispatch(getAllAdminOrders())
        return response.data;
    }
);

export const adminOrdersSlice = createSlice({
  name: 'adminOrder',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
          .addCase(getAllAdminOrders.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(getAllAdminOrders.fulfilled, (state, action) => {
              state.status = 'success';
              state.allOrders = action.payload.orders;
          })
          .addCase(getAllAdminOrders.rejected, (state) => {
              state.status = 'failed';
          })
  }});

export default adminOrdersSlice;
