import React from "react";
import TaskTable from "./components/TaskTable";
import TodoListSelector from "./components/TodoListSelector";
import { useSelector } from "react-redux";
import AddTaskMenu from "./components/AddTaskMenu";
import EditTaskMenu from "./components/EditTaskMenu/index";

function App() {
  const appState = useSelector((state) => {
    return state.app;
  });

  console.log(appState);

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

  return (
    <div className="h-screen  w-screen bg-blue-400 flex flex-col gap-5 items-center pt-[150px]">
      {appState.isAddTaskMenuOpen && <AddTaskMenu />}
      {appState.isEditTaskMenuOpen && <EditTaskMenu task={editedTask} />}
      {!appState.isAddTaskMenuOpen && !appState.isEditTaskMenuOpen && (
        <>
          <TodoListSelector />
          <TaskTable />
        </>
      )}
    </div>
  );
}

export default App;
