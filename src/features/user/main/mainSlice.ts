import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {mainRequests} from "./mainApi";
import {DataForAddingDrinkToBasket, FilteredDrink} from "../../../type/objTypes";

export interface AuthState {
    status: 'success' | 'loading' | 'failed';
    allDrinks: [];
}

const initialState: AuthState = {
    status: 'success',
    allDrinks: [],
};

export const getAllFilteredDrinks = createAsyncThunk(
    'main/getAllFilteredDrinks',
    async (data: FilteredDrink) => {
      const response = await mainRequests.getFiltered(data);
        console.log("allMainDrinks", response.data)
      return response.data;
    }
);

export const addDrinkToBasket = createAsyncThunk(
    'main/addDrinkToBasket',
    async (data: DataForAddingDrinkToBasket, {dispatch}) => {
        const response = await mainRequests.add(data);
        dispatch(getAllFilteredDrinks({limit: 4, page: 1}));
        console.log("addedDrinkToBasket", response.data)
        return response.data;
    }
);

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
          .addCase(getAllFilteredDrinks.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(getAllFilteredDrinks.fulfilled, (state, action) => {
              state.status = 'success';
              state.allDrinks = action.payload.phones;
          })
          .addCase(getAllFilteredDrinks.rejected, (state) => {
              state.status = 'failed';
          })
  }});

export default mainSlice;
