import React, { Component } from 'react'
import { TodoListConsumer } from '../../Providers/TodoListProvider.jsx'

export class TodoItem extends Component {
  render () {
    return (
      <TodoListConsumer>
        {({todoList, handleOnRemoveTodo}) => {
          return (
            <ul>
              {
                todoList.map(todo => (
                  <li key={todo.id}>
                    <p>{todo.text}</p>
                    <button type='button' onClick={() => handleOnRemoveTodo(todo.id)}> Remove </button>
                  </li>
                ))
              }
            </ul>
          )
        }}
      </TodoListConsumer>
    )
  }
}
