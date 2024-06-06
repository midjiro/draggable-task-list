import React, { forwardRef, useContext, useState } from 'react';
import { TasksDispatchContext } from 'components/context/TasksContext';
import { addTask } from 'services/tasks';
import { toast } from 'react-toastify';
import { ACTIONS } from 'constants/actions';
import { motion } from 'framer-motion';

const CreateTaskForm = forwardRef(({ tasks }, ref) => {
    const INITIAL_STATE = '';

    const [title, setTitle] = useState(INITIAL_STATE);
    const dispatch = useContext(TasksDispatchContext);

    const handleChange = ({ target: field }) => {
        setTitle(field.value);
    };

    const handleCreation = (newTaskTitle) => {
        addTask(tasks, newTaskTitle)
            .then((newTask) =>
                dispatch({ type: ACTIONS.ADD_TASK, payload: { task: newTask } })
            )
            .catch((error) => toast(error.message));
    };

    return (
        <form
            action=""
            className="task-manager__form"
            onSubmit={(e) => {
                e.preventDefault();
                handleCreation(title);
                setTitle(INITIAL_STATE);
            }}
            ref={ref}
        >
            <div className="form-control">
                <label className="sr-only" htmlFor="task-title">
                    Create a new task
                </label>
                <input
                    type="text"
                    placeholder="Create a new task..."
                    value={title}
                    onChange={handleChange}
                    required
                    className="form-control__field"
                    id="task-title"
                />
            </div>
            <button className="task-manager__btn">
                <span className="fa-solid fa-plus"></span>
                <span className="sr-only">Create</span>
            </button>
        </form>
    );
});

export default motion(CreateTaskForm);
