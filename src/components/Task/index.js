import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTaskComplete } from "../../store/slices/todoListSlice";
import TaskActions from "./../TaskActions/index";
import { FiMoreHorizontal } from "react-icons/fi";

const categoryColors = {
  Job: "bg-categoryJob",
  Hobby: "bg-categoryHobby",
  Lifestyle: "bg-categoryLifestyle",
};

function Task({ task }) {
  const [taskActionsOpen, setTaskActionsOpen] = useState(false);
  const [newTask, setNewTask] = useState(task);
  const [editMode, setEditMode] = useState(false);
  const [categoryTagColor, setCategoryTagColor] = useState("");
  const taskNameInputRef = useRef(null);
  const taskNameRef = useRef(null);
  const editButtonRef = useRef(null);
  const taskActionsButtonRef = useRef(null);
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleTaskComplete(task.id));
  };

  const handleInputChange = (newTaskName) => {
    setNewTask({
      id: task.id,
      name: newTaskName,
      date: task.date,
      category: task.category,
      completed: task.completed,
    });
  };

  const setEditModeFromTaskActions = () => {
    setEditMode(!editMode);
  };

  const handleEditTask = () => {
    dispatch(editTask(newTask));
    setEditMode(false);
  };

  const handleStartEdit = () => {
    setEditMode(true);
    setTaskActionsOpen(false);
  };

  const handleCloseTaskActions = () => {
    setTaskActionsOpen(false);
  };

  useEffect(() => {
    setCategoryTagColor(categoryColors[task.category]);
  }, [task.category]);

  useEffect(() => {
    const handleClick = (e) => {
      if (editButtonRef.current && editButtonRef.current.contains(e.target)) {
        return;
      }

      if (
        taskNameInputRef.current &&
        !taskNameInputRef.current.contains(e.target) &&
        editMode
      ) {
        handleEditTask();
      }

      if (
        taskNameRef.current &&
        taskNameRef.current.contains(e.target) &&
        !editMode
      ) {
        handleStartEdit();
      }

      if (
        taskActionsButtonRef.current &&
        !taskActionsButtonRef.current.contains(e.target) &&
        taskActionsOpen
      ) {
        handleCloseTaskActions();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [editMode, newTask, taskActionsOpen]);

  return (
    <tr className="text-center align-left">
      <td className="p-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 ring-0 focus:ring-0 focus:ring-offset-0 cursor-pointer border-blue-300   checked:text-blue-300"
          onChange={handleCheckboxClick}
          checked={task.completed}
        />
      </td>

      <td className="p-2 inline-block  w-[350px] h-[80px] " ref={taskNameRef}>
        {editMode ? (
          <input
            ref={taskNameInputRef}
            autoFocus
            className="border-none bg-transparent  outline-none focus:border-none border-transparent focus:border-transparent focus:ring-0      line-clamp-1   h-full  flex items-center p-0  text-left w-full"
            placeholder={task.name}
            onChange={(e) => handleInputChange(e.target.value)}
          ></input>
        ) : (
          <div className="line-clamp-1 h-full flex items-center p-0  w-full   text-left ">
            {task.name}
          </div>
        )}
      </td>

      <td className="p-2  text-right">
        <span
          className={`text-white p-2 text-right rounded-xl ${
            categoryColors[task.category]
          }`}
        >
          {task.category}
        </span>
      </td>
      <td className="p-2">{task.date}</td>
      <td className="p-2">
        <button
          className="w-[40px] h-[40px] hover:bg-blue-200 hover:text-white flex items-center justify-center rounded-full text-2xl shadow-2xl border-2 border-blue-100 transition duration-300 ease-in-out "
          ref={taskActionsButtonRef}
          onClick={() => setTaskActionsOpen((currentValue) => !currentValue)}
        >
          <FiMoreHorizontal />
        </button>
        {taskActionsOpen ? (
          <div className="absolute bg-gray-100  p-2 border-2 border-blue-300 flex gap-2 justify-between  rounded-md shadow-2xl duration-300 transition">
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
