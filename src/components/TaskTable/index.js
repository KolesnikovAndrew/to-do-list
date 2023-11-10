import React from "react";
import Task from "../Task";
import { useSelector } from "react-redux";
import AddTaskButton from "../AddTaskButton";
function TaskTable() {
  const selectedTodoListId = useSelector((state) => {
    return parseInt(state.todoLists.selectedTodoListId, 10);
  });

  const selectedTodoListTasks = useSelector((state) => {
    const selectedList = state.todoLists.todoLists.find(
      (list) => list.id === selectedTodoListId
    );

    if (selectedList) {
      let tasks = [...selectedList.tasks];
      const todoListIsSortedBy = state.todoLists.sortBy;
      tasks.sort((a, b) => {
        if (state.todoLists.sortOrder === "asc") {
          return a[todoListIsSortedBy].localeCompare(b[todoListIsSortedBy]);
        }
        if (state.todoLists.sortOrder === "dsc") {
          return b[todoListIsSortedBy].localeCompare(a[todoListIsSortedBy]);
        }
      });

      if (state.todoLists.filterCategory) {
        tasks = tasks.filter(
          (task) => task.category === state.todoLists.filterCategory
        );
      }

      return tasks;
    }

    return [];
  });

  return (
    <div className=" border-2 shadow-xl rounded-lg p-3 w-[700px] items-center justify-center flex flex-col bg-gray-100">
      {selectedTodoListTasks.length ? (
        <table>
          <thead>
            <tr className=" uppercase text-blue-900">
              <th className="p-2 border-b-2 border-blue-100"></th>
              <th className="p-2 border-b-2 border-blue-100">Name</th>
              <th className="p-2 border-b-2 border-blue-100">Category</th>
              <th className="p-2 border-b-2 border-blue-100">Created at</th>
              <th className="p-2 border-b-2 border-blue-100"></th>
            </tr>
          </thead>
          <tbody>
            {selectedTodoListTasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-4">No tasks in this todo list...</div>
      )}

      <div className="w-full  items-center justify-center align-middle flex">
        <AddTaskButton />
      </div>
    </div>
  );
}

export default TaskTable;
