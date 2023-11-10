import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/slices/todoListSlice";
import { closeAddTaskMenu } from "../../store/slices/appSlice";

function AddTaskMenu() {
  const dispatch = useDispatch();
  const isAddTaskMenuOpen = useSelector((state) => state.app.isAddTaskMenuOpen);

  const [newTask, setNewTask] = useState({
    name: "",
    date: new Date().toLocaleDateString().replaceAll("/", "."),
    category: "Job",
    completed: false,
  });

  const isTaskNameEmpty = newTask.name.trim() === "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTaskButtonClick = () => {
    if (isTaskNameEmpty) {
      return;
    }

    dispatch(addTask(newTask));
    dispatch(closeAddTaskMenu());
  };

  const handleCancelButtonClick = () => {
    dispatch(closeAddTaskMenu());
  };

  return (
    <>
      {isAddTaskMenuOpen && (
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col gap-4">
          <div>
            <h1 className="text-blue-400 text-2xl mb-4">Add New Task</h1>
            <input
              className="w-full py-2 px-3 rounded-lg border"
              type="text"
              name="name"
              placeholder="Task name"
              value={newTask.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h1 className="text-blue-400 text-2xl mb-4">Select a category</h1>
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
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-gray-300 hover:text-gray-700 "
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button
              className={`bg-blue-400 text-white py-2 px-4 rounded-lg   ${
                isTaskNameEmpty ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleAddTaskButtonClick}
              disabled={newTask.name.trim() === ""}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTaskMenu;
