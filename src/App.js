import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/Todo'


class App extends React.Component {
constructor(){
    super();
    this.state={
        Todo
    };
}
toggleItem= itemId=> {
    console.log(itemId);
};
    render() {
        console.log('rendering...');
        return (
            <div className = 'App'>
                <div className = 'header'>
                <h1>My Family Todo List</h1> 
                <TodoForm />
                </div>
                <TodoList Todo={Todo} />
                todos={this.state.todos}
                toggleItem={this.toggleItem}
            </div>
        );
    }
}


export default App
