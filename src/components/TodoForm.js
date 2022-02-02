import React, { useState, useEffect, useRef } from "react";
import '../cssfiles/TodoForm.css'
const TodoForm = (props)=>{
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });
  
    const handleOnChange = (e)=>{
        setInput(e.target.value);
    }
    const handleOnSubmit = (e)=>{e.preventDefault();
        
        props.onSubmit({
            text: input,
            id: Math.floor(Math.random() * 10000),
            complete: false
        });
        setInput('');
    }
    
    return(
        <form className="form-container" onSubmit={handleOnSubmit}>
            <label>Add Todo</label>
            <input name="text"
             placeholder="Add new todo"
             type='text'
             value={input}
             ref={inputRef}
             onChange={handleOnChange}/>
            <button>Submit</button>
        </form>
    )
}
export default TodoForm;