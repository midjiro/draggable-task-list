import CreateTaskForm from "components/CreateTaskForm";
import Footer from "components/Footer";
import Header from "components/Header";
import TaskList from "components/TaskList";
import { TasksDispatchContext } from "components/context/TasksContext";
import { useEffect, useReducer } from "react";
import { fetchTasks } from "services/tasks";
import taskReducer from "reducers/tasks";
import { ACTIONS } from "constants/actions";

function App() {
  const [taskList, dispatch] = useReducer(taskReducer);

  useEffect(() => {
    fetchTasks()
      .then((tasks) => {
        dispatch({ type: ACTIONS.FETCH_TASKS, payload: { tasks } });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="task-manager">
      <TasksDispatchContext.Provider value={dispatch}>
        <Header />
        <main className="task-manager__body">
          <CreateTaskForm tasks={taskList?.tasks} />
          <TaskList tasks={taskList?.tasks} filter={taskList?.filter} />
        </main>
        <Footer />
      </TasksDispatchContext.Provider>
    </div>
  );
}

export default App;
