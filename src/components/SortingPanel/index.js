import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCategory,
  setSortBy,
  toggleSortOrder,
} from "../../store/slices/todoListSlice";

function SortingPanel() {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => {
    return state.todoLists.sortOrder;
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
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-[500px] shadow-lg flex justify-between items-center align-middle justify-center">
      <div className="flex items-center gap-3 ">
        <div className="flex items-center">
          <span className="mr-2">Sort by:</span>
          <select
            className="p-2 rounded-md"
            onChange={(e) => handleSortByChange(e)}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div
          className="flex items-center cursor-pointer text-blue-400"
          onClick={handleToggleSortOrder}
        >
          {sortOrder === "asc" ? "▼" : "▲"}
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Category:</span>
        <select
          className="p-2 rounded-md"
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
