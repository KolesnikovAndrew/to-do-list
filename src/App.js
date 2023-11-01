import React from "react";
import TaskTable from "./components/TaskTable";
import TodoListSelector from "./components/TodoListSelector";
import { useSelector } from "react-redux";
import AddTaskMenu from "./components/AddTaskMenu";
import EditTaskMenu from "./components/EditTaskMenu/index";
import AddTodoListMenu from "./components/AddTodoListMenu";

function App() {
  const appState = useSelector((state) => {
    return state.app;
  });

  const editedTask = useSelector((state) => {
    const selectedList = state.todoLists.todoLists.find(
      (list) => list.id === state.todoLists.selectedTodoListId
    );

    if (selectedList) {
      const task = selectedList.tasks.find(
        (task) => task.id === appState.editedTaskId
      );

      return task;
    }
    return null;
  });

  const areAllMenusClosed =
    !appState.isAddTaskMenuOpen &&
    !appState.isEditTaskMenuOpen &&
    !appState.isAddTodoListMenuOpen;

  return (
    <div className="h-screen  w-screen bg-blue-400 flex flex-col gap-5 items-center pt-[150px]">
      <AddTaskMenu />
      <EditTaskMenu task={editedTask} />
      <AddTodoListMenu />
      {areAllMenusClosed && (
        <>
          <TodoListSelector />
          <TaskTable />
        </>
      )}
    </div>
  );
}

export default App;
