import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoList } from "../../store/slices/todoListSlice";
import { BsList, BsChevronDown, BsChevronUp } from "react-icons/bs";

function TodoListSelector() {
  const [selectorIsOpen, setSelectorIsOpen] = useState(false);

  const todoLists = useSelector((state) => {
    return state.todoLists.todoLists;
  });
  const [displayTodoList, setDisplayTodoList] = useState(todoLists[0].name);

  const dispatch = useDispatch();

  const handleSelectChange = (todoListId) => {
    dispatch(selectTodoList(todoListId));
    setDisplayTodoList(todoLists[todoListId - 1].name);
    setSelectorIsOpen(false);
  };

  const handleToggleSelector = () => {
    setSelectorIsOpen(!selectorIsOpen);
  };

  return (
    <div className="w-[500px] bg-transparent border-2 shadow-2xl text-gray-200 rounded-md px-4 py-3 outline-none border-gray-200 relative">
      <div
        id="todoListSelector"
        className="bg-transparent h-full focus:ring-0 focus:border-gray-200 border-none w-full  cursor-pointer flex items-center justify-between "
        onClick={handleToggleSelector}
      >
        <div className="flex items-center gap-2 text-xl">
          <BsList className="float-left" />
          <span className="float-left ">{displayTodoList}</span>
        </div>

        {selectorIsOpen ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      {selectorIsOpen ? (
        <div
          id="optionList"
          className={`bg-blue-200 border-2 border-white absolute w-[500px] mt-[5px] rounded cursor-pointer ml-[-18px] transform transition-transform duration-150`}
        >
          {todoLists.map((todoList) => (
            <div
              className="p-2 w-full bg-blue-400 hover:bg-blue-200 shadow-2xl"
              key={todoList.id}
              onClick={() => handleSelectChange(todoList.id)}
            >
              {todoList.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default TodoListSelector;
