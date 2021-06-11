import React from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>

      <div className="navBar_list">
        <ul className='navBar_list'>
          <NavLink to='/'>
          <li className='navBar_list_item'>Home</li>
          </NavLink>
          <NavLink to='/folder'>
          <li className='navBar_list_item'>Folders</li>
          </NavLink>
          <NavLink to='/tasks'>
          <li className='navBar_list_item'>Tasks</li>  
          </NavLink>
          
        </ul>
      </div>
      
    </div>
  );
}


export default NavBar;