import React, {useContext, useEffect} from 'react';
import {folderContext} from '../../context/folderContext';
import Folder from './Folder';
import FolderForm from './FolderForm'
import axios from 'axios';
import { SCOPABLE_TYPES } from '@babel/types';
import { RiSave2Fill } from 'react-icons/ri';

function FolderContainer() {
    const {folders, setFolders} = useContext(folderContext);

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:8080/all')
        const obj = await data.json()

        console.log("OBJ: ",obj)
        
        for(let i=0;i <obj.length;i++){
            console.log("CADA OBJ",obj[i]);
            
            addFolder({
             id: obj[i].id,
             name: obj[i].name,
             tasks: obj[i].tasks,
             isOpen: false
            })

        }      
      }
    
      const save = async (folder)=>{
        let response = await fetch('http://localhost:8080/save', {
            method: 'POST', headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },          
            body: JSON.stringify({
                id: folder.id,
                name: folder.name,
                tasks: folder.tasks,
                isOpen: false
            }  
            )
        })
        let responseJSON = await response.json();
        console.log(`RESPONSE JSON: ----------------${responseJSON}`)
        return responseJSON.result;
      }

      useEffect(()=>{
        obtenerDatos() 
      }, [])

      useEffect(()=>{
          console.log(`carpetas:${folders} `)

      folders.map( i =>{
          console.log(i);

       })    

    },[folders])


    const addFolder = folder =>{
        const newFolder = [ folder, ...folders]
        save(folder)
        setFolders(newFolder)
    }

    const updateFolder = async (folderId, newValue)=>{
        
        setFolders(prev => prev.map(item =>(item.id === folderId ? newValue  : item )))
        //let response = await fetch(`http://localhost:8080/save/${folderId}`)
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

    
    const removeFolder = async id =>{
        const removeArr = [...folders].filter(folder => folder.id !== id)
        let response = await fetch(`http://localhost:8080/delete/${id}`)
        

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
