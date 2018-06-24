import React, { Component, createContext } from 'react'

const { Consumer, Provider } = createContext({
  todoList: [],
  nextId: 0,
  handleOnAddTodo () {},
  handleOnRemoveTodo () {}
})

export class TodoListProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todoList: [],
      nextId: 0
    }

    this.handleOnAddTodo = this.handleOnAddTodo.bind(this)
    this.handleOnRemoveTodo = this.handleOnRemoveTodo.bind(this)
  }

  handleOnAddTodo (e) {
    e.preventDefault()

    let text = e.target.text.value

    let todo = {
      text,
      id: ++this.state.nextId
    }

    let prevState = this.state.todoList

    prevState.push(todo)

    this.setState({
      todoList: prevState
    })
  }

  handleOnRemoveTodo (id) {
    let prevState = this.state.todoList

    let filter = prevState.filter(todo => todo.id !== id)

    this.setState({
      todoList: filter
    })
  }

  render () {
    return (
      <Provider value={{...this.state, handleOnAddTodo: this.handleOnAddTodo, handleOnRemoveTodo: this.handleOnRemoveTodo}}>
        {this.props.children}
      </Provider>
    )
  }
}

export const TodoListConsumer = Consumer
