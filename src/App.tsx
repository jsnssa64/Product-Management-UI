import * as React from 'react'
import ToDoButtons from './components/toDoButtons';
import ITodo from './interfaces/ITodo';
//import "./styles.css";

export class App extends React.Component {
  private _todos: ITodo[] = [{
    id: 12,
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
  }];

  constructor(props: any) {
    super(props)

    this.state = {
      name: props.text
    }
  }

  test(){
    console.log("Test Call without this")
  }
  
  testTwo(){
    console.log("Test Call without this")
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List Test</h1>
        <TodoList todos={this._todos}/>
      </div>
    )
  }
}

function test() {
  console.log("Test");
}

function TodoList(props: any) {
  console.log(props)

  return (
    <div>
      <ul>
        {props.todos.map((todoItem: ITodo) => (
          <li onClick={this.test()} key={todoItem.id}>Todo Item: {todoItem.text}</li>
        ))}
      </ul>
      <ToDoButtons></ToDoButtons>
    </div>
    
    
  )
}


export default App

