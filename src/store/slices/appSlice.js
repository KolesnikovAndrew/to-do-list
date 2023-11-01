import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAddTaskMenuOpen: false,
  isEditTaskMenuOpen: false,
  isAddTodoListMenuOpen: false,
  isEditTodoListMenuOpen: false,
  editedTaskId: null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    openAddTaskMenu: (state) => {
      state.isAddTaskMenuOpen = true;
      state.isEditTaskMenuOpen = false;
    },
    closeAddTaskMenu: (state) => {
      state.isAddTaskMenuOpen = false;
    },
    openEditTaskMenu: (state, action) => {
      state.isEditTaskMenuOpen = true;
      state.isAddTaskMenuOpen = false;
      state.editedTaskId = action.payload;
    },
    closeEditTaskMenu: (state) => {
      state.isEditTaskMenuOpen = false;
    },
    openAddTodoListMenu: (state) => {
      state.isAddTodoListMenuOpen = true;
    },
    closeAddTodoListMenu: (state) => {
      state.isAddTodoListMenuOpen = false;
    },
  },
});

export const {
  openAddTaskMenu,
  closeAddTaskMenu,
  openEditTaskMenu,
  closeEditTaskMenu,
  openAddTodoListMenu,
  closeAddTodoListMenu,
} = appSlice.actions;
export default appSlice.reducer;
