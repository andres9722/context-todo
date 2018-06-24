import React, { Component } from 'react'
import { TodoListConsumer } from '../../Providers/TodoListProvider.jsx'

export class TodoInput extends Component {
  render () {
    return (
      <TodoListConsumer>
        {({handleOnAddTodo}) => {
          return (
            <form onSubmit={e => handleOnAddTodo(e)} >
              <input type='text' name='text' />
              <input type='submit' value='Submit' />
            </form>
          )
        }}
      </TodoListConsumer>
    )
  }
}
