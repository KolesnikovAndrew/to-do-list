import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddTaskMenuOpen: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    openAddTaskMenu: (state) => {
      state.isAddTaskMenuOpen = true;
    },
    closeAddTaskMenu: (state) => {
      state.isAddTaskMenuOpen = false;
    },
  },
});

export const { openAddTaskMenu, closeAddTaskMenu } = appSlice.actions;
export default appSlice.reducer;
