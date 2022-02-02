import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import '../cssfiles/TodoList.css'
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodos = (todo) => {
      let txt = todo.text.trim();
        if(!txt)
        return;

        let newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...newTodos);
    }
    const completeTodo = id => {
      let updatedTodo = todos.map((todo)=>{
        if(todo.id === id){
          todo.complete = !(todo.complete);
        }
        return todo;
      })
      setTodos(updatedTodo);
    }
    const removeTodo = id => {
      const newTodo = todos.filter(todo => todo.id !== id)

      setTodos(newTodo);
    }
  return (
    <div className="container">
      <h1>What is your plan today?</h1>
      <TodoForm onSubmit={addTodos}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList;
