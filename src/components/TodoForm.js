import React from 'react'


class TodoForm extends React.Component {
    constructor (props){
    super (props);
    this.state = {
        itemText: '',
    }
  }

  changeHandler = (event) =>{
      event.preventDefault();
      this.setState({itemText: event.target.value});
  };
  submitHandler = event => {
      event.preventDefault();
      this.props.addItem(this.state.itemText);
      this.setState({itemText: ''});    
  };

  render(){
      return (
          <form onSubmit = {this.submitHandler}>
              <input 
              type='text'
              task='itemText' 
              value= {this.state.itemText}
              onChange = {this.changeHandler} 
              />
              <button type='submit'>Add</button>
          </form>
      )
  }
}
export default TodoForm