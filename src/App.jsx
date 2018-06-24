import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoListProvider } from './Providers/TodoListProvider.jsx'
import { TodoList } from './Components/TodoList/TodoList.jsx'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React - Context API</h1>
        </header>
        <TodoListProvider>
          <TodoList />
        </TodoListProvider>
      </div>
    )
  }
}

export default App
