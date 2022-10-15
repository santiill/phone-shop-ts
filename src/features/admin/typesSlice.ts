import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {adminRequests} from "./adminApi";
import {addTypeData, editBrandData, ReceiptDrinkData} from "../../type/objTypes";
import {mainRequests} from "../user/main/mainApi";

export interface AuthState {
    status: 'success' | 'loading' | 'failed';
    allTypes: [];
}

const initialState: AuthState = {
    status: 'success',
    allTypes: [],
};

export const getAllTypes = createAsyncThunk(
    'types/getAllTypes',
    async () => {
      const response = await adminRequests.types.getAll();
      return response.data;
    }
);

export const receiptDrink = createAsyncThunk(
    'types/receiptDrink',
    async (data: ReceiptDrinkData, {dispatch}) => {
        const response = await mainRequests.receipt(data);
        return response.data;
    }
);

export const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
          .addCase(getAllTypes.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(getAllTypes.fulfilled, (state, action) => {
              state.status = 'success';
              state.allTypes = action.payload;
          })
          .addCase(getAllTypes.rejected, (state) => {
              state.status = 'failed';
          })
  }});

export default typesSlice;
