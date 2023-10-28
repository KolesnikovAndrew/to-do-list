import React from "react";
import TaskTable from "./components/TaskTable";
import TodoListSelector from "./components/TodoListSelector";

function App() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col gap-5 items-center pt-[150px] w-screen bg-cosmos bg-no-repeat bg-center backdrop-brightness-0 ">
      <TodoListSelector />
      <TaskTable />
    </div>
  );
}

export default App;
