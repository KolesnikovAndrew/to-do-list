import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openAddTaskMenu } from "../../store/slices/appSlice";

function AddTaskButton() {
  const dispatch = useDispatch();

  const handleAddTaskButtonClick = () => {
    dispatch(openAddTaskMenu());
  };

  return (
    <button
      className="text-blue-300 text-4xl hover:scale-125 duration-300 transition"
      onClick={handleAddTaskButtonClick}
    >
      <AiFillPlusCircle />
    </button>
  );
}

export default AddTaskButton;
