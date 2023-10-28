import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./slices/todoListSlice";

export const store = configureStore({
  reducer: {
    todoLists: todoListSlice,
  },
});
