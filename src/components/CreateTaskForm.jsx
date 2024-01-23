import React from "react";

export default function CreateTaskForm() {
  return (
    <form action="" className="task-manager__form">
      <div className="form-control">
        <label className="sr-only" htmlFor="task-title">
          Create a new task
        </label>
        <input
          type="text"
          placeholder="Create a new task..."
          required
          className="form-control__field"
          id="task-title"
        />
        <p className="form-control__error"></p>
      </div>
      <button>
        <span className="fa-solid fa-plus"></span>
        <span className="sr-only">Create</span>
      </button>
    </form>
  );
}
