import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useCheckAdmin from '../../hooks/useCheckAdmin';
const Root = () => {
  const {user}=useContext(AuthContext)
  const [isAdmin] = useCheckAdmin(user?.email)
  console.log(isAdmin)
  return (
    <div className='container mx-auto px-4'>
    
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col m-6 bg-base-300'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
            <li>
              <NavLink to='/dashboard/myappointment'  className={({ isActive }) =>
              isActive ? "bg-indigo-300" : ''
            }>My APPOINTMENT</NavLink>
            </li>
            {isAdmin && <li>
              <NavLink to='/dashboard/allUser'  className={({ isActive }) =>
              isActive ? "bg-indigo-300" : ''
            }>All user</NavLink>
            
            </li>} 
      
            {isAdmin && <li>
              <NavLink to='/dashboard/adddoctor'  className={({ isActive }) =>
              isActive ? "bg-indigo-300" : ''
            }>All user</NavLink>
            
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Root;
