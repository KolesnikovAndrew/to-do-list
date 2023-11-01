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
      className="bg-white text-blue-300 p-2 w-full"
      onClick={handleAddTodoListButtonClick}
    >
      {children}
    </button>
  );
}

export default AddTodoListButton;
