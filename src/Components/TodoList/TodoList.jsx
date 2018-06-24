import React, { Component, Fragment } from 'react'
import { TodoItem } from '../TodoItem/TodoItem.jsx'
import { TodoInput } from '../TodoInput.jsx/TodoInput.jsx'

export class TodoList extends Component {
  render () {
    return (
      <Fragment>
        <TodoInput />
        <TodoItem />
      </Fragment>
    )
  }
}
