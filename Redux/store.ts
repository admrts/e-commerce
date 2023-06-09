import { configureStore } from "@reduxjs/toolkit";
import countSliceReducer from "./countSlice";
import basketSliceReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    count: countSliceReducer,
    basket: basketSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
