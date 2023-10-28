import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  toggleTaskComplete,
} from "../../store/slices/todoListSlice";
import TaskActions from "./../TaskActions/index";
import { FiMoreHorizontal } from "react-icons/fi";
function Task({ task }) {
  const [taskActionsOpen, setTaskActionsOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);
  const [editMode, setEditMode] = useState(false);
  const taskNameInputRef = useRef(null);
  const taskNameRef = useRef(null);
  const editButtonRef = useRef(null);
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleTaskComplete(task.id));
  };

  const handleInputChange = (newTaskName) => {
    setNewTaskName(newTaskName);
  };

  const setEditModeFromTaskActions = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (editButtonRef.current && editButtonRef.current.contains(e.target)) {
        return;
      }

      if (
        taskNameInputRef.current &&
        !taskNameInputRef.current.contains(e.target) &&
        editMode === true
      ) {
        dispatch(editTask({ id: task.id, updatedTask: newTaskName }));
        setEditMode(false);
      }

      if (
        taskNameRef.current &&
        taskNameRef.current.contains(e.target) &&
        editMode === false
      ) {
        setEditMode(true);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [editMode, newTaskName]);

  return (
    <tr className={"text-center"}>
      <td className="p-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5  rounded-full focus:ring-0 focus:ring-offset-0 cursor-pointer   checked:text-blue-300"
          onChange={handleCheckboxClick}
          checked={task.completed}
        />
      </td>

      <td className="p-2" ref={taskNameRef}>
        {editMode ? (
          <input
            ref={taskNameInputRef}
            autoFocus
            className="border-none bg-transparent shadow-md w-full"
            placeholder={task.name}
            onChange={(e) => handleInputChange(e.target.value)}
          ></input>
        ) : (
          task.name
        )}
      </td>
      <td className="p-2">{task.date}</td>
      <td className="p-2">{task.category}</td>
      <td className="p-2">
        <button
          className="w-[40px] h-[40px] hover:bg-blue-100 flex items-center justify-center rounded-full text-2xl"
          onClick={() => setTaskActionsOpen((currentValue) => !currentValue)}
        >
          <FiMoreHorizontal />
        </button>
        {taskActionsOpen ? (
          <div className="absolute bg-gray-100 w-[100px] py-3 border-2 border-blue-300 flex flex-col rounded-md ">
            <TaskActions
              taskId={task.id}
              setEditModeFromTaskActions={setEditModeFromTaskActions}
              editButtonRef={editButtonRef}
            />
          </div>
        ) : null}
      </td>
    </tr>
  );
}

export default Task;
