import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "../../store/slices/todoListSlice";
import { closeAddTodoListMenu } from "../../store/slices/appSlice";

function AddTodoListMenu() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => {
    return state.app;
  });

  const [newTodoListName, setNewTodoListName] = useState("");

  const handleInputChange = (e) => {
    setNewTodoListName(e.target.value);
  };

  const handleAddTodoListButtonClick = () => {
    dispatch(addTodoList(newTodoListName));
    dispatch(closeAddTodoListMenu());
  };

  const handleCancelButtonClick = () => {
    dispatch(closeAddTodoListMenu());
  };

  return (
    <>
      {appState.isAddTodoListMenuOpen ? (
        <div className="bg-gray-100 rounded-lg p-6">
          <h1 className="text-blue-400 text-2xl mb-4">Add New Todo List</h1>
          <input
            className="w-full py-2 px-3 rounded-lg border"
            type="text"
            name="name"
            placeholder="Todo list name"
            onChange={handleInputChange}
          />
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-4"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button
              className="bg-blue-300 text-white py-2 px-4 rounded-lg"
              onClick={handleAddTodoListButtonClick}
            >
              Add Todo List
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AddTodoListMenu;
