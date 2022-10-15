import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {authRequests} from "../features/auth/authAPI";
import {authSlice} from "../features/auth/authSlice";
import {ordersSlice} from "../features/user/orders/ordersSlice";
import mainSlice from "../features/user/main/mainSlice";
import brandsSlice from "../features/admin/brandsSlice";
import adminOrdersSlice from "../features/admin/ordersSlice";
import reportSlice from "../features/admin/reportSlice";
import typesSlice from "../features/admin/typesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    orders: ordersSlice.reducer,
    main: mainSlice.reducer,
    brands: brandsSlice.reducer,
    adminOrder: adminOrdersSlice.reducer,
    report: reportSlice.reducer,
    types: typesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
