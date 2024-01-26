import { useContext } from "react";
import { updateTaskStatus, deleteTask } from "services/tasks";
import { toast } from "react-toastify";
import { ACTIONS } from "constants/actions";
import { TasksDispatchContext } from "components/context/TasksContext";

export default function Task({ id, status, title }) {
  const dispatch = useContext(TasksDispatchContext);

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
      .then(() => dispatch({ type: ACTIONS.DELETE_TASK, payload: { taskId } }))
      .catch((error) => toast(error.message));
  };

  const getNewStatus = () => (status === "Completed" ? "To do" : "Completed");

  const handleStatusUpdate = (taskId) => {
    const newStatusValue = getNewStatus();

    updateTaskStatus(taskId, newStatusValue)
      .then(() =>
        dispatch({
          type: ACTIONS.UPDATE_TASK_STATUS,
          payload: { taskId, newStatusValue },
        })
      )
      .catch((error) => toast(error.message));
  };

  return (
    <article className="task">
      <div>
        <label className="sr-only" htmlFor="#task-status">
          {status}
        </label>
        <input
          type="checkbox"
          checked={status === "Completed"}
          onChange={() => {
            handleStatusUpdate(id);
          }}
          className="task__status-indicator"
          id="task-status"
        />
      </div>
      <h2 className="task__title">{title}</h2>
      <button
        className="task__btn task__btn--danger"
        onClick={() => {
          handleDeleteTask(id);
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
        <span className="sr-only">Delete task</span>
      </button>
    </article>
  );
}
