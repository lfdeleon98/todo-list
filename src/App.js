import React, { useState, useEffect } from "react";
/* a useState is a hook that lets us use states and other react features without writing a class */
import './App.css';
import Form from './Components/Form'
import TodoList from "./Components/TodoList";

function App() {
  //states
  /* inputText is the actual value, and setInputText is the function that allows you to change the value*/
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //all is our default status
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);

  //will run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
       case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  //save to local storage

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Lauren's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
