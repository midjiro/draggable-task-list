import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  // Checks wether task is defined and its length > 0 or not
  if (tasks?.length > 0) {
    return (
      <div className="task-manager__tasks">
        {tasks.map((task, id) => (
          <Task {...task} key={id} />
        ))}
      </div>
    );
  }

  return (
    <div className="task-manager__tasks">
      <p className="task-manager__message">No tasks yet added</p>
    </div>
  );
}
