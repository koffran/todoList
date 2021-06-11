import React, {useState} from 'react'

function FolderForm(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value : '');
    
    const handleChange = e=>{
        setInput(e.target.value)
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
    
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text: input,
            tasks:[],
            isOpen: false
        });
    
        setInput('')
    
    }
    
        return (
            <form className ="todo-form" onSubmit={handleSubmit}>
               {props.edit ? 
               (<>
               <input type="text" placeholder="Create a folder" value ={input} name="text" className='todo-input' onChange={handleChange}></input>
                <button className='todo-button'> Edit folder</button> </>)
                :
                 (<>
                 <input type="text" placeholder="Create a folder" value ={input} name="text" className='todo-input' onChange={handleChange}></input>
                <button className='todo-button'> Create folder</button>
                </>)}
            </form>
        )
    }

export default FolderForm
