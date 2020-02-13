import React from 'react';
import ReactDOM from 'react-dom';
import { stuff } from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
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
        })
    }
    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <h1>My Todo List</h1>
                    <TodoForm />

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

