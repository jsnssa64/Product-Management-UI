import * as React from 'react'
import { Component } from 'react'

export class ToDoButtons extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
          <button>Add</button>
          <button>Delete</button>
      </div>
    )
  }
}

export default ToDoButtons