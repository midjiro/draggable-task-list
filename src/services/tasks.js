import { v4 } from "uuid";

export async function fetchTasks() {
  const res = await fetch(process.env.REACT_APP_SERVER_URI);

  if (!res.ok)
    throw Error(`Sorry, we are unable to load task list from our server.`);

  const data = await res.json();

  return data;
}

export async function deleteTask(taskId) {
  const res = await fetch(process.env.REACT_APP_SERVER_URI + taskId, {
    method: "DELETE",
  });

  if (!res.ok) throw Error(`Sorry, we are unable to delete the given task.`);
}

export async function updateTaskStatus(taskId, newStatusValue) {
  const res = await fetch(process.env.REACT_APP_SERVER_URI + taskId, {
    method: "PATCH",
    body: JSON.stringify({ status: newStatusValue }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw Error(`Sorry, we are unable to update the given task.`);
}

export async function addTask(tasks, newTaskTitle) {
  const checkForDuplicates = (title) => {
    const duplicateIndex = tasks.findIndex((task) => task.title === title);

    return duplicateIndex !== -1;
  };

  const isDuplicate = checkForDuplicates(newTaskTitle);

  if (isDuplicate) throw Error("Task with given title already exists.");
  const newTask = { id: v4(), title: newTaskTitle, status: "To do" };

  const res = await fetch(process.env.REACT_APP_SERVER_URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });

  if (!res.ok) throw Error("Sorry, we are unable to add a new task");

  return newTask;
}
