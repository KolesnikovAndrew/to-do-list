import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./slices/todoListSlice";
import appSlice from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    todoLists: todoListSlice,
    app: appSlice,
  },
});
