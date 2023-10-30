import React from "react";
import TaskTable from "./components/TaskTable";
import TodoListSelector from "./components/TodoListSelector";
import { useSelector } from "react-redux";
import AddTaskMenu from "./components/AddTaskMenu";

function App() {
  const appState = useSelector((state) => {
    return state.app;
  });

  console.log(appState);
  return (
    <div className="h-screen  w-screen bg-blue-700 flex flex-col gap-5 items-center pt-[150px]">
      {appState.isAddTaskMenuOpen ? (
        <>
          <AddTaskMenu />
        </>
      ) : (
        <>
          <TodoListSelector />
          <TaskTable />
        </>
      )}
    </div>
  );
}

export default App;
