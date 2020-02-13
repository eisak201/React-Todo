import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'

const todos = [
    {
        task: 'vaccuum carpet',
        id: 2478340,
        completed: false
      },
      {
        task: 'groceries',
        id: 2478340,
        completed: false
      },
      {
        task: 'install baby gate',
        id: 2478340,
        completed: false
      },
      {
        task: 'rake leaves',
        id: 2478340,
        completed: false
      },
      {
        task: 'wash dishes',
        id: 2478340,
        completed: false
      },
      {
        task: 'cook dinner',
        id: 2478340,
        completed: false
      }
    
    ];
class TodoList extends React.Component {
constructor(){
    super();
    this.state={
        todos
    };
}
toggleTodo= todoId=> {
    console.log(todoId);
};
    render() {
        console.log('rendering...');
        return (
            <div className = 'App'>
                <div className = 'header'>
                <h1>My Family Todo List</h1> 
                <TodoForm />
                </div>
                <TodoList todos={todos} />
                todos={this.state.todos}
                toggleItem={this.toggleTodo}
            </div>
        );
    }
}





render(<App />, document.getElementById('root'));

