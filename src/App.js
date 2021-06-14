import React, {useState, useEffect, Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import List from './components/List';
import FolderContainer from './components/Folders/FolderContainer';
import {folderTasksContext}from './context/folderContext';
import {folderContext}from './context/folderContext';
import {folderInnerContext}from './context/folderContext';
import { FolderService } from './service/FolderService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel';

import 'primereact/resources/themes/luna-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import useAxios from 'axios-hooks';

function App(){
  const [tasks,setTasks] = useState([]);
  const [folders, setFolders] = useState([])
  const [innerFolders, setInnerFolders] = useState([])
    

    return(<div className="App">
     
       <folderTasksContext.Provider value={{tasks,setTasks}}>
       <folderContext.Provider value ={{folders, setFolders}}>
       <folderInnerContext.Provider value ={{innerFolders, setInnerFolders}}>

       <BrowserRouter>
       <NavBar/>
       <Switch>
          <Route exact path='/' render ={() => <FolderContainer/>}/>  
           <Route path='/folder' render ={()=><FolderContainer/>}/>
           <Route path='/tasks' render ={()=><List/>}/>
         </Switch>
 
       </BrowserRouter>  
       </folderInnerContext.Provider>   
       </folderContext.Provider>
       </folderTasksContext.Provider>
     </div>
   );

}
export default App