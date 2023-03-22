import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface BasketState {
  count: number;
}

const initialState: BasketState = {
  count: 0,
};

export const basketSlice = createSlice({
  name: "basket",

  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      console.log(state.count);
    },
    decrement: (state) => {
      state.count -= 1;
      console.log(state.count);
    },
  },
});

export const { increment, decrement } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.basket.count;

export default basketSlice.reducer;
