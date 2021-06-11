import React, { useContext} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import {folderTasksContext} from '../context/folderContext';
import {folderContext} from '../context/folderContext';

function List(props) {

    const {tasks, setTasks}= useContext(folderTasksContext);
    const {folders, setFolders} =useContext(folderContext);

const addTask = task =>{

    if(props.folderId)
    {
        let updatedFolder = folders.map(folder=>{
            if(folder.id === props.folderId){
                folder.tasks.push(task) 
                console.log(folder)
            }
        })
        setFolders(folders, ...updatedFolder);
    }
    else
    {
        const newTasks = [task, ...tasks]
        setTasks(newTasks)

    } 
}

const completeTask = id=>{
    let upadtedTasks = tasks.map(task=>{
        if(task.id === id){
            task.isComplete =!task.isComplete
        }
        return task
    })
    setTasks(upadtedTasks)
}

const updateTask = (taskId, newValue)=>{
    setTasks(prev => prev.map(item =>(item.id === taskId ? newValue : item )))

}

const removeTask = id =>{
    const removeArr = [...tasks].filter(task => task.id !== id)
    setTasks(removeArr)
}

    return (
        <div>
             {props.folderId ? 
           (<>
           <TodoForm folderId= {props.folderId} onSubmit={addTask/*props.onSubmit*/}/> 
           </>)
            : props.folder?
            (<>
             <Todo todos={props.folder.tasks}
            completeTodo={completeTask}
            removeTodo={removeTask}
            updateTodo={updateTask}
            folder = {props.folder}
            />
            </>):
             (<>
             <TodoForm onSubmit={addTask}/>
             <Todo todos={tasks}
            completeTodo={completeTask}
            removeTodo={removeTask}
            updateTodo={updateTask}
            />
            </>)}
        </div>
    )
}

export default List
//<TodoForm onSubmit={addTask}/>