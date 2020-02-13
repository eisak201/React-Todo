import React from 'react'


class TodoForm extends React.Component {
    constructor (props){
    super (props);
    this.state = {
        itemText: ''
    }
  }

  changeHandler = (event) {
      this.setState([])
  }
  render(){
      return (
          <form>
              <input type='text'name='itemText' value= {this.state.itemText} />
              <button>Add</button>
          </form>
      )
  }
}
export default TodoForm