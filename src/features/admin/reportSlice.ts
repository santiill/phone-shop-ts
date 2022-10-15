import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {adminRequests} from "./adminApi";
import {ReportDates} from "../../type/objTypes";

export interface AuthState {
    status: 'success' | 'loading' | 'failed';
    orders: [];
    total_sum: number;
}

const initialState: AuthState = {
    status: 'success',
    orders: [],
    total_sum: 0,
};

export const getReport = createAsyncThunk(
    'report/getReport',
    async (dates: ReportDates) => {
        const response = await adminRequests.reports.getReportByDates(dates);
        return response.data;
    }
);

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
          .addCase(getReport.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(getReport.fulfilled, (state, action) => {
              state.status = 'success';
              state.orders = action.payload.orders;
              state.total_sum = action.payload.total_sum;
          })
          .addCase(getReport.rejected, (state) => {
              state.status = 'failed';
          })
  }});

export default reportSlice;
