import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/slices/todoListSlice";
import { openEditTaskMenu } from "../../store/slices/appSlice";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

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
        className=" text-blue-400   hover:bg-blue-200 hover:text-white rounded-full p-2 text-xl border-2 border-blue-300 hover:border-blue-200"
        onClick={handleEditTask}
      >
        <AiFillEdit />
      </button>
      <button
        className=" text-deleteRed hover:bg-deleteRed hover:text-white rounded-full p-2 text-xl border-2 border-deleteRed hover:border-deleteRed"
        onClick={handleDeleteTask}
      >
        <AiFillDelete />
      </button>
    </>
  );
}

export default TaskActions;
