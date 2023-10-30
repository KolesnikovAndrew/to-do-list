import React, { useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openAddTaskMenu } from "../../store/slices/appSlice";

function AddTaskButton() {
  const dispatch = useDispatch();

  const handleAddTaskButtonClick = () => {
    dispatch(openAddTaskMenu());
  };

  return (
    <button
      className="text-blue-200 text-4xl"
      onClick={handleAddTaskButtonClick}
    >
      <AiFillPlusCircle />
    </button>
  );
}

export default AddTaskButton;
