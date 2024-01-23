import React from "react";

export default function Task({ id, isCompleted, title }) {
  return (
    <article className="task">
      <div className="task__status-indicator indicator">
        <label className="sr-only" htmlFor="#task-status">
          {isCompleted ? "Completed" : "To do"}
        </label>
        <input
          type="checkbox"
          className="task__status-indicator"
          id="task-status"
        />
      </div>
      <h2 className="task__title">{title}</h2>
      <button className="task__btn task__btn--danger">
        <i className="fa-solid fa-trash-can"></i>
        <span className="sr-only">Delete task</span>
      </button>
    </article>
  );
}
