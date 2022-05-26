import * as React from 'react'
import ITodo from './interfaces/ITodo';
//import "./styles.css";

export class App extends React.Component {
  readonly todos = [
    {
      id: 1,
      text: 'Wash dishes', 
      done: false
    },
    {
      id: 2,
      text: 'Do laundry', 
      done: false
    },
    {
      id: 3,
      text: 'Take shower', 
      done: false
    }
  ];

  constructor(props: ITodo) {
    super(props)
  
    this.state = {
      name: props.name
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
      </div>
    )
  }
}

export default App