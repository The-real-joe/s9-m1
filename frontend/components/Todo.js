import React from 'react'
import App from './App'

export default class Todo extends React.Component {

 
  render() {
    return (
      <div>
 <ul className = "todo-list"></ul>
 <li> {this.todos}</li>
      </div>
    )
  }
}
