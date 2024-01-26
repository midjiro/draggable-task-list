import { ACTIONS } from "constants/actions";

const INITIAL_STATE = { tasks: null, filter: "All" };

export default function taskListReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.FETCH_TASKS:
      return { ...state, tasks: payload.tasks };
    case ACTIONS.ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload.task] };
    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.taskId),
      };
    case ACTIONS.UPDATE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.taskId
            ? { ...task, status: payload.newStatusValue }
            : task
        ),
      };

    case ACTIONS.UPDATE_FILTER:
      return { ...state, filter: payload.newFilterValue };
    default:
      return state;
  }
}
