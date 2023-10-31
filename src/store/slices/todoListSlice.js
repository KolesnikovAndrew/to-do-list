import { createSlice } from "@reduxjs/toolkit";

const addTaskToTodoList = (todoList, task, newTaskId) => ({
  ...todoList,
  tasks: [
    ...todoList.tasks,
    {
      id: newTaskId,
      name: task.name,
      date: task.date,
      category: task.category,
      completed: false,
    },
  ],
});

const initialState = {
  selectedTodoListId: 1,
  editedTask: {},
  todoLists: [
    {
      id: 1,
      name: "List 1",
      tasks: [
        {
          id: 1,
          name: "Create task table",
          date: "10/26/2023",
          category: "Job",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      name: "List 2",
      tasks: [
        {
          id: 1,
          name: "Create a cat website",
          date: "10/26/2029",
          category: "Hobby",
          completed: false,
        },
        {
          id: 2,
          name: "Create a car website",
          date: "10/26/2029",
          category: "Hobby",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      name: "List 3",
      tasks: [
        {
          id: 1,
          name: "Make a sandwich",
          date: "10/26/2023",
          category: "Lifestyle",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      name: "List 4",
      tasks: [
        {
          id: 1,
          name: "List 4 Task",
          date: "10/26/2023",
          category: "Test",
          completed: false,
        },
      ],
    },
  ],
};

const todoListSlice = createSlice({
  name: "todoListSlice ",
  initialState: initialState,
  reducers: {
    selectTodoList: (state, action) => {
      state.selectedTodoListId = action.payload;
    },
    addTask: (state, action) => {
      const selectedTodoListId = state.selectedTodoListId;
      const list = state.todoLists.find(
        (list) => list.id === selectedTodoListId
      );
      if (list) {
        const newTaskId = list.tasks.length + 1;
        const isTaskAldreadyExists = list.tasks.some(
          (task) => task.id === newTaskId
        );

        if (!isTaskAldreadyExists) {
          const updatedTodoLists = state.todoLists.map((list) =>
            list.id === selectedTodoListId
              ? addTaskToTodoList(list, action.payload, newTaskId)
              : list
          );

          return {
            ...state,
            todoLists: updatedTodoLists,
          };
        }
      }
    },
    deleteTask: (state, action) => {
      const list = state.todoLists.find(
        (list) => list.id === state.selectedTodoListId
      );
      if (list) {
        list.tasks = list.tasks.filter((task) => task.id !== action.payload);
      }
    },
    editTask: (state, action) => {
      console.log(action.payload);
      const list = state.todoLists.find(
        (list) => list.id === state.selectedTodoListId
      );
      if (list) {
        const taskIndex = list.tasks.findIndex(
          (task) => task.id === action.payload.id
        );

        if (taskIndex !== -1) {
          list.tasks[taskIndex] = action.payload;
        }
      }
    },
    toggleTaskComplete: (state, action) => {
      const list = state.todoLists.find(
        (list) => list.id === state.selectedTodoListId
      );
      if (list) {
        list.tasks = list.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleTaskComplete,
  selectTodoList,
  getSelectedTodoList,
  setEditedTask,
} = todoListSlice.actions;
export default todoListSlice.reducer;
