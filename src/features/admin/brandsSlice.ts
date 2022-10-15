import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {adminRequests} from "./adminApi";
import {editBrandData} from "../../type/objTypes";

export interface AuthState {
    status: 'success' | 'loading' | 'failed';
    allBrands: [];
}

const initialState: AuthState = {
    status: 'success',
    allBrands: [],
};

export const getAllBrands = createAsyncThunk(
    'brands/getAllBrands',
    async () => {
      const response = await adminRequests.brands.getAll();
      return response.data;
    }
);

export const editBrand = createAsyncThunk(
    'brands/editBrand',
    async (data: editBrandData) => {
        const response = await adminRequests.brands.edit(data);
        return response.data;
    }
);

export const addBrand = createAsyncThunk(
    'brands/addBrand',
    async (name: string, {dispatch}) => {
        const response = await adminRequests.brands.add(name);
        dispatch(getAllBrands())
        return response.data;
    }
);

export const deleteBrand = createAsyncThunk(
    'brands/deleteBrand',
    async (id: number, {dispatch}) => {
        const response = await adminRequests.brands.delete(id);
        dispatch(getAllBrands())
        return response.data;
    }
);

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
          .addCase(getAllBrands.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(getAllBrands.fulfilled, (state, action) => {
              state.status = 'success';
              state.allBrands = action.payload;
          })
          .addCase(getAllBrands.rejected, (state) => {
              state.status = 'failed';
          })
  }});

export default brandsSlice;
