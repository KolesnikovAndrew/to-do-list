import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCategory,
  setSortBy,
  toggleSortOrder,
} from "../../store/slices/todoListSlice";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

function SortingPanel() {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => {
    return state.todoLists.sortOrder;
  });
  const sortBy = useSelector((state) => {
    return state.todoLists.sortBy;
  });

  const handleToggleSortOrder = () => {
    dispatch(toggleSortOrder());
  };

  const handleSortByChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleFilterCategory = (e) => {
    dispatch(setFilterCategory(e.target.value));
  };

  return (
    <div className="bg-transparent text-white text-xl p-3 rounded-lg w-[500px] flex justify-between items-center align-middle ">
      <div className="flex items-center gap-3 ">
        <div className="flex items-center">
          <span className="mr-2">Sort by:</span>
          <select
            className="p-2 rounded-md border-none text-blue-950 w-[110px]"
            onChange={(e) => handleSortByChange(e)}
            value={sortBy}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div
          className="flex cursor-pointer text-white  rounded-full  items-center justify-center align-center"
          onClick={handleToggleSortOrder}
        >
          {sortOrder === "asc" ? (
            <AiOutlineSortAscending />
          ) : (
            <AiOutlineSortDescending />
          )}
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Category:</span>
        <select
          className="p-2 rounded-md border-none text-blue-950 w-[110px]"
          onChange={(e) => handleFilterCategory(e)}
        >
          <option value="">All</option>
          <option value="Job">Job</option>
          <option value="Hobby">Hobby</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div>
    </div>
  );
}

export default SortingPanel;
