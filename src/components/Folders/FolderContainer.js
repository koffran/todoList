import React, {useContext} from 'react';
import {folderContext} from '../../context/folderContext';
import Folder from './Folder';
import FolderForm from './FolderForm'

function FolderContainer() {
    const {folders, setFolders} = useContext(folderContext);

    const addFolder = folder =>{
        const newFolder = [folder, ...folders]
    
        setFolders(newFolder)
    }

    const updateFolder = (folderId, newValue)=>{
        setFolders(prev => prev.map(item =>(item.id === folderId ? newValue : item )))
    
    }

    const completeFolder = id=>{
        let upadtedFolders = folders.map(folder=>{
            if(folder.id === id){
                folder.isComplete =!folder.isComplete
            }
            return folder
        })
        setFolders(upadtedFolders)
    }

    
    const removeFolder = id =>{
        const removeArr = [...folders].filter(folder => folder.id !== id)
        setFolders(removeArr)
    }


    return (
        <div>
            <h2>Folders: </h2>
            <FolderForm onSubmit={addFolder}/>
            <Folder folders={folders}
            setFolders={setFolders}
            completeFolder={completeFolder}
            removeFolder={removeFolder}
            updateFolder={updateFolder}/>
            
        </div>
    )
}

export default FolderContainer
