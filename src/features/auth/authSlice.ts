import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {authRequests} from "./authAPI";
import {Data} from "../../type/objTypes";
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

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (data: Data) => {
    console.log(data)
    const response = await authRequests.login(data);
      setCookie("token", response.data.token, 1)
      setCookie("role", response.data.role, 1)
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

export default authSlice.reducer;
