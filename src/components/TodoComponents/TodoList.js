// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm'

const TodoList = props => {
    console.log (props.stuff);
    return (
        <div className = 'honeyDo-List'>
{props.stuff.map ((item) => {

return <TodoForm item={item} key={item.id} />;
        
})}
    </div>
    );
}
export default TodoList