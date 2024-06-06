import React, { forwardRef } from 'react';
import Task from './Task';
import { motion } from 'framer-motion';

const TaskList = forwardRef(({ tasks, filter }, ref) => {
    const filteredTasks =
        filter === 'All'
            ? tasks
            : tasks?.filter((task) => task.status === filter);

    if (filteredTasks?.length === 0) {
        return (
            <div className="task-manager__tasks" ref={ref}>
                <p className="task-manager__message">No tasks yet added</p>
            </div>
        );
    }
    // Checks wether task is defined and its length > 0 or not

    return (
        <div className="task-manager__tasks" ref={ref}>
            {filteredTasks?.map((task, id) => (
                <Task {...task} key={id} layout />
            ))}
        </div>
    );
});

export default motion(TaskList);
