import React from "react";
import '../cssfiles/Todo.css'
import { MdDone, MdClear } from "react-icons/md";
const Todo = ({ todos, completeTodo, removeTodo }) => {
    return todos.map((todo, index) =>(
            <div className={todo.complete === true ? "todo-row completed"  : "todo-row"} key={index}>
                <div key={todo.id} >
                    {todo.text}
                </div>
                <div className="icons">
                    <MdDone onClick={() =>{
                        completeTodo(todo.id);
                        }} className="doneIcon"/>
                    <MdClear onClick={()=> removeTodo(todo.id)} className="deleteIcon"/>
                </div>
            </div>
        ))
}
export default Todo;