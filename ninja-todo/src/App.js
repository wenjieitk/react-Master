import React,{ Component } from 'react'
import Todos from './component/Todos'
import AddTodo from './component/AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some meat'}
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length +1
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
