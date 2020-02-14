import React, {Comonent} from 'react';
import ReactDOM from 'react-dom';

import { stuff } from './components/Todo'
import './App.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            stuff: stuff
        };
    }

    toggleItem = itemId => {
        this.setState({
            stuff: this.state.stuff.map(item => {
                if (itemId === item.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        });
    }

    addItem = itemText => {
const newItem = {
    task: itemText,
completed: false,
id: Date.now()
    };
    this.setState({
        stuff: [...this.state.stuff, newItem]
    });
};
    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <h1>My Todo List</h1>
                    <TodoForm addItem = {this.addItem}/>

                </div>
                <TodoList 
                stuff={this.state.stuff} 
                toggleItem={this.toggleItem} />
            </div>
        );
    }
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

