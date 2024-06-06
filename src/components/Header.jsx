import React, { forwardRef } from 'react';
import Filter from './Filter';
import { motion } from 'framer-motion';

const Header = forwardRef((props, ref) => {
    return (
        <header className="task-manager__header" ref={ref}>
            <h1 className="task-manager__title">Task list</h1>
            <Filter />
        </header>
    );
});

export default motion(Header);
