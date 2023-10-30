import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices/todoListSlice";
import { closeAddTaskMenu } from "../../store/slices/appSlice";

function AddTaskMenu() {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({
    id: null,
    name: "",
    date: new Date().toLocaleDateString(),
    category: "Job",
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleAddTaskButtonClick = () => {
    dispatch(addTask(newTask));
    dispatch(closeAddTaskMenu());
  };

  const handleCancelButtonClick = () => {
    dispatch(closeAddTaskMenu());
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h1 className="text-blue-400 text-2xl mb-4">Add New Task</h1>
      <input
        className="w-full py-2 px-3 rounded-lg border"
        type="text"
        name="name"
        placeholder="Task name"
        value={newTask.name}
        onChange={handleInputChange}
      />
      <h2 className="text-blue-400 text-lg mt-4 mb-2">Select a category</h2>
      <select
        className="w-full py-2 px-3 rounded-lg border"
        name="category"
        value={newTask.category}
        onChange={handleInputChange}
      >
        <option value="Job">Job</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Hobby">Hobby</option>
      </select>
      <div className="mt-6 flex justify-between">
        <button
          className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-4"
          onClick={handleCancelButtonClick}
        >
          Cancel
        </button>
        <button
          className="bg-blue-300 text-white py-2 px-4 rounded-lg"
          onClick={handleAddTaskButtonClick}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTaskMenu;
