import React from "react";

export default function Filter({ onChange }) {
  return (
    <div className="filter">
      <button className="filter__btn">
        <i className="fa-solid fa-filter"></i>
        <span className="sr-only">Filter tasks by status</span>
      </button>
      <ul className="filter__option-list">
        <li className="filter__option filter__option--selected">To do</li>
        <li className="filter__option">Completed</li>
      </ul>
    </div>
  );
}
