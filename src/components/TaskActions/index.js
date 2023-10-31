import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../store/slices/todoListSlice";
import { openEditTaskMenu } from "../../store/slices/appSlice";

function TaskActions({ taskId, editButtonRef }) {
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(openEditTaskMenu(taskId));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <button
        ref={editButtonRef}
        className=" text-blue-400 w-full  hover:bg-blue-200 hover:text-white"
        onClick={handleEditTask}
      >
        Edit
      </button>
      <button
        className=" text-deleteRed hover:bg-deleteRed hover:text-white"
        onClick={handleDeleteTask}
      >
        Delete
      </button>
    </>
  );
}

export default TaskActions;
