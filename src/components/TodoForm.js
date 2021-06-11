import React, {useState} from 'react'

function TodoForm(props) {
const [input,setInput] = useState(props.edit ? props.edit.value : '');

const handleChange = e=>{
    setInput(e.target.value)
}

const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*1000),
        text: input
    });

    setInput('')

}

    return (
        <form className ="todo-form" onSubmit={handleSubmit}>
           {props.edit ? 
           (<>
           <input type="text" placeholder="Add a todo" value ={input} name="text" className='todo-input' onChange={handleChange}></input>
            <button className='todo-button'> Edit todo</button> </>)
            :
            props.folderId?
                (<>
                <input type="text" placeholder="Add a todo" value ={input} name="text" className='todo-input' onChange={handleChange}></input>
                <button className='todo-button'> Add task</button> </>)
                :
             (<>
             <input type="text" placeholder="Add a todo" value ={input} name="text" className='todo-input' onChange={handleChange}></input>
            <button className='todo-button'> Add todo</button>
            </>)}
      
        </form>
    )
}

export default TodoForm
