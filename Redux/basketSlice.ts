import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { BasketCart } from "@/Types/types";

interface BasketState {
  items: Array<BasketCart>;
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",

  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<BasketCart>) => {
      const checkItems = state.items.find(
        (item) => item.id === action.payload.id
      );
      console.log(checkItems);

      if (checkItems) {
        checkItems.count += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    addButton: (state, action: PayloadAction<number>) => {
      const checkItems = state.items.find((item) => item.id === action.payload);
      if (checkItems) {
        checkItems.count += 1;
      }
    },
    minusButton: (state, action: PayloadAction<number>) => {
      const checkItems = state.items.find((item) => item.id === action.payload);
      if (checkItems) {
        if (checkItems.count === 1) {
          state.items = state.items.filter((item) => {
            return item.id !== action.payload;
          });
        } else {
          checkItems.count -= 1;
        }
      }
    },
    calculateItemTotalPrice: (state) => {
      state.items.forEach((item) => {
        item.totalPrice = item.count * item.price;
      });
    },
  },
});
export const { addBasket, addButton, calculateItemTotalPrice, minusButton } =
  basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count.count;

export default basketSlice.reducer;
