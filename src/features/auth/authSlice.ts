import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../../app/store';
import {authRequests} from "./authAPI";
import notifications from "../../utils/notifications";
import {Data} from "../../type/objTypes";
import {store} from "react-notifications-component";
import {useNavigate} from "react-router";
import {setCookie} from "../../utils/cookieFunction";

export interface AuthState {
  value: number;
    status: 'success' | 'loading' | 'failed';
    role: 'user' | 'admin';
}

const initialState: AuthState = {
  value: 0,
  status: 'success',
    role: 'user',
};

// type Not = {
//     any[]: any[]
// };

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (data: Data) => {
    console.log(data)
    const response = await authRequests.login(data);
    console.log("login", response.data);
      setCookie("token", response.data.token, 1)
      setCookie("role", response.data.role, 1)
    // alert("Успешно авторизовались")
      if(response.data.role == "admin"){
          data.navigate("/admin")
      }else {
          data.navigate("/lk")
      }
    return response.data;
  }
);

export const registrationAsync = createAsyncThunk(
    'auth/registration',
    async (data: Data) => {
        console.log("dd", data)
      const response = await authRequests.registration(data);
        alert("Успешно зарегистрировались")

        console.log("registration", response.data)
      return response.data;
    }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
          state.status = 'success';
          state.role = action.payload.role;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const { increment, decrement, incrementByAmount } = authSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;
//
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default authSlice.reducer;
