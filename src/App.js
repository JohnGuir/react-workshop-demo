import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoItem from "./components/TodoItem";

function App() {
  // The state of the todo items.
  const [todoItems, setTodoItems] = useState([
    {
      key: 0,
      completed: false,
      title: "Do the laundry",
    }
  ]);

  // functions to delete, complete, and add todo items.
  const deleteTodo = (key) => {
    const newTodoItems = todoItems.filter((item) => item.key !== key);
    setTodoItems(newTodoItems);
  };

  const completeTodo = (key) => {
    const newTodoItems = todoItems.map((item) => {
      if (item.key === key) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoItems(newTodoItems);
  };

  const addTodo = (title) => {
    const key = Date.now();
    // TODO: Implement addTodo
    setTodoItems((prev) => [...prev, { key, completed: false, title }])
    console.log("Adding todo", title, key)
  };

  // The main app component
  return (
    <div className="App">
      <header className="header">
        <h1>My To-Do List</h1>
      </header>
      <div className="body-container">
        <TodoContainer name="My Daily Tasks" addTodo={addTodo}>
          {
            todoItems.map((item) => (
              <TodoItem
                key={item.key}
                title={item.title}
                completed={item.completed}
                onDelete={() => deleteTodo(item.key)}
                onComplete={() => completeTodo(item.key)}
              />
            ))
          } 
        </TodoContainer>
      </div>
    </div>
  );
}

export default App;
