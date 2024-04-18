import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {

  const [todos, setTodos] = useState([
  ]);
  const inputRef = useRef();

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    if(inputRef.current.value==="") return;

    const newTodo = {
      id: (todos?.[todos.length -1]?.id ?? 0) +1,
      name: inputRef.current.value,
      completed: false
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
  }

  function toogleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo=>todo.id === id);
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function clearCompleted() {
    const newTodos = todos.filter(todo=>!todo.completed)
    setTodos(newTodos)
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearCompleted}>Clear Completed</button>
      <TodoList todos={todos} toogleTodo={toogleTodo}/>
    </>
  );
}

export default App;
