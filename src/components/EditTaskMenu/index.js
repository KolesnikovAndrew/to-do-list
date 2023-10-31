import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeEditTaskMenu } from "../../store/slices/appSlice";
import { editTask } from "../../store/slices/todoListSlice";

function EditTaskMenu({ task }) {
  const dispatch = useDispatch();
  console.log(task);
  const [taskName, editTaskName] = useState(task.name);
  const [taskCategory, editTaskCategory] = useState(task.category);

  const handleNameInputChange = (e) => {
    editTaskName(e.target.value);
  };
  const handleCategoryInputChange = (e) => {
    editTaskCategory(e.target.value);
  };

  const handleCancelButtonClick = () => {
    dispatch(closeEditTaskMenu());
  };

  const handleApplyButtonClick = () => {
    dispatch(
      editTask({
        id: task.id,
        name: taskName,
        category: taskCategory,
        date: task.date,
        completed: task.completed,
      })
    );

    dispatch(closeEditTaskMenu());
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h1 className="text-blue-400 text-2xl mb-4">New name</h1>
      <input
        className="w-full py-2 px-3 rounded-lg border"
        type="text"
        name="name"
        value={taskName}
        placeholder={taskName}
        onChange={handleNameInputChange}
      />
      <h2 className="text-blue-400 text-lg mt-4 mb-2">Select a category</h2>
      <select
        className="w-full py-2 px-3 rounded-lg border"
        name="category"
        value={taskCategory}
        onChange={handleCategoryInputChange}
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
          onClick={handleApplyButtonClick}
        >
          Apply changes
        </button>
      </div>
    </div>
  );
}

export default EditTaskMenu;
