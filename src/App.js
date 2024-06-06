import CreateTaskForm from 'components/CreateTaskForm';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import { TasksDispatchContext } from 'components/context/TasksContext';
import { useEffect, useReducer } from 'react';
import { fetchTasks } from 'services/tasks';
import taskReducer from 'reducers/tasks';
import { ACTIONS } from 'constants/actions';
import { AnimatePresence } from 'framer-motion';

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
        <AnimatePresence>
            <div className="task-manager">
                <TasksDispatchContext.Provider value={dispatch}>
                    <Header layout />
                    <main className="task-manager__body">
                        <CreateTaskForm tasks={taskList?.tasks} layout />
                        <TaskList
                            tasks={taskList?.tasks}
                            filter={taskList?.filter}
                            layout
                        />
                    </main>
                </TasksDispatchContext.Provider>
            </div>
        </AnimatePresence>
    );
}

export default App;
