import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {authRequests} from "../features/auth/authAPI";
import {authSlice} from "../features/auth/authSlice";
import {ordersSlice} from "../features/user/orders/ordersSlice";
import mainSlice from "../features/user/main/mainSlice";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    orders: ordersSlice.reducer,
    main: mainSlice.reducer,
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
