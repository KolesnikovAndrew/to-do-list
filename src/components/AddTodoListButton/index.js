import React from "react";
import { useDispatch } from "react-redux";
import { openAddTodoListMenu } from "../../store/slices/appSlice";

function AddTodoListButton({ children }) {
  const dispatch = useDispatch();

  const handleAddTodoListButtonClick = () => {
    dispatch(openAddTodoListMenu());
  };

  return (
    <button
      className="bg-blue-500 text-white hover:bg-white hover:text-blue-300 p-2 w-full transition duration-300 ease-in-out transform"
      onClick={handleAddTodoListButtonClick}
    >
      {children}
    </button>
  );
}

export default AddTodoListButton;
