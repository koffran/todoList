import React, {useState, useContext} from 'react';
import {folderContext} from '../../context/folderContext';
import {folderInnerContext} from '../../context/folderContext';
import FolderForm from './FolderForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import List from '../List';

function Folder({/*folders, setFolders,*/ completeFolder, removeFolder,updateFolder,addTaskToFolder, tasks}) {
    const {innerFolders, setInnerFolders} =useContext(folderInnerContext);
    const {folders, setFolders} =useContext(folderContext);
   const [edit, setEdit] = useState({
    id: null,
    value: ''
})

const submitUpdate = value =>{
    updateFolder(edit.id, value)
    setEdit({
        id: null,
        value:''
    })
}

if(edit.id){
    return <FolderForm edit= {edit} onSubmit={submitUpdate}/>
}

const viewFolder = (id)=>{
    folders.map(folder =>{
        if(folder.id === id && !(folder.isOpen)){
            folder.isOpen = true;
        }
        else if(folder.id === id && folder.isOpen){
            folder.isOpen = false;

        }
    })

}

const addToFolder =(id, task) =>{
    console.log("ADDTOFOLDER")
    console.log(id, task)
    let upadtedFolders = folders.map(folder=>{
        if(folder.id === id){
            folder.tasks.push(task)
        }
        return folder //esto no va creo
    })
    setFolders(upadtedFolders)
    console.log(folders)
    

}

return folders.map((folder, index) =>(
    <div className={folder.isComplete ?'folder-row complete' : 'folder-row'} key={index}>

        <div key={folder.id} onClick ={()=> completeFolder(folder.id)}>
            {folder.isOpen? <div><List folder= {folder}/></div>: <div></div>}
            
            { <h3 key={folder.id} onClick ={()=> viewFolder(folder.id)}>{folder.text}</h3> }
            { <List folderId ={folder.id} onSubmit={addToFolder}/> }
        </div>
        <div className="icons">
            <RiCloseCircleLine
            onClick={()=> removeFolder(folder.id)}
            className='delete-icon'
            />
            <TiEdit onClick={()=> setEdit({id: folder.id, value: folder.text})}
            className='edit-icon'/>
        </div>
    </div>
))
}

export default Folder
