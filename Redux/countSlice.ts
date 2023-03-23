import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",

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

export const { increment, decrement } = countSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count.count;

export default countSlice.reducer;
