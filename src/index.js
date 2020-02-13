import React from 'react';
import ReactDOM from 'react-dom';

import {stuff} from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
console.log(stuff)

const App = props => {

        console.log ('rendering...');
        return(
            <div className = 'App'>
                <div className = 'header'>
                    <h1>My Todo List</h1>
                   
                </div> 
                <TodoList stuff={stuff}/>
            </div>
        );
    }



const rootElement = document.getElementById('root'); 
ReactDOM.render(<App />, rootElement);

