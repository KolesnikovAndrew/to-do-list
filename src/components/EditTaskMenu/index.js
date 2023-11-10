import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditTaskMenu } from "../../store/slices/appSlice";
import { editTask } from "../../store/slices/todoListSlice";
import { selectAppState } from "../../store/slices/appSlice";

function EditTaskMenu({ task }) {
  const dispatch = useDispatch();
  const appState = useSelector((state) => {
    return state.app;
  });
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setTaskCategory(task.category);
    }
  }, [task]);

  const handleNameInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleCategoryInputChange = (e) => {
    setTaskCategory(e.target.value);
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
    <>
      {appState.isEditTaskMenuOpen && task ? (
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col gap-4">
          <div>
            <h1 className="text-blue-400 text-2xl mb-4">Edit task</h1>
            <input
              className="w-full py-2 px-3 rounded-lg border"
              type="text"
              name="name"
              value={taskName}
              placeholder={task ? `Edit: ${task.name}` : "Task name"}
              onChange={handleNameInputChange}
            />
          </div>
          <div>
            <h1 className="text-blue-400 text-2xl mb-4">Select a category</h1>
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
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-4 hover:brightness-110"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button
              className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:brightness-110"
              onClick={handleApplyButtonClick}
            >
              Apply changes
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default EditTaskMenu;
