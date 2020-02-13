import React from 'react';

const Todo = props => {
    return (
        <div className={`todo${props.todo.task ? 'task' : ''}` />
            <p>{props.todo.task}</p>
            </div>
    );
}
