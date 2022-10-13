import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {authRequests} from "../features/auth/authAPI";
import {authSlice} from "../features/auth/authSlice";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
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
