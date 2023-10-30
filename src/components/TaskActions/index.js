import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/slices/todoListSlice";

function TaskActions({ taskId, setEditModeFromTaskActions, editButtonRef }) {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <button
        ref={editButtonRef}
        className=" text-blue-400 w-full  hover:bg-blue-200 hover:text-white"
        onClick={() => setEditModeFromTaskActions()}
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