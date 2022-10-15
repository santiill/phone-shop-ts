import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {userRequests} from "./userApi";

export interface AuthState {
    status: 'success' | 'loading' | 'failed';
    allOrders: [];
    allBasket: [],
}

const initialState: AuthState = {
    status: 'success',
    allOrders: [],
    allBasket: [],
};

export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async () => {
      const response = await userRequests.order.getAll();
        console.log("allOrders", response.data)
      return response.data;
    }
);

export const getAllBasket = createAsyncThunk(
    'orders/getAllBasket',
    async () => {
        const response = await userRequests.basket.getAll();
        console.log("allBasket", response.data)
        return response.data;
    }
);

export const deleteOrderBasket = createAsyncThunk(
    'orders/deleteBasket',
    async (id: number, {dispatch}) => {
        const response = await userRequests.basket.delete(id);
        dispatch(getAllBasket())
        console.log("deletedBasket", response.data)
        return response.data;
    }
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
          state.status = 'success';
          state.allOrders = action.payload.orders;
      })
      .addCase(getAllOrders.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getAllBasket.pending, (state) => {
          state.status = 'loading';
      })
      .addCase(getAllBasket.fulfilled, (state, action) => {
          state.status = 'success';
          state.allBasket = action.payload.drinks;
      })
      .addCase(getAllBasket.rejected, (state) => {
          state.status = 'failed';
      });
      },
});

export default ordersSlice;
