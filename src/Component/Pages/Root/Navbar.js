import React, { useContext } from 'react';

import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/UserContext';
const Navbar = () => {
  const {user,signOutUser,setUser}=useContext(AuthContext)
  const handleSignOut=()=>{
    signOutUser()
    .then(result=>{
      setUser("")
   
    })
  }
  
    return (
        <div className="navbar bg-green-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">HOME</Link></li>
            <li >
              <Link to="">
                ABOUT 
              </Link> 
            </li>
            <li >
              <Link to="/appointment">
                APPOINTMENT 
              </Link>
            </li>
            <li><Link to="">REVIEWS</Link></li>
            <li><Link to="">CONTACT US</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li>{user?.email}</li>
            </ul>
          </div>
          <Link to="" className="btn btn-ghost normal-case text-xl">MY-DOCTOR'S</Link>
        </div>
        <div className="navbar-center hidden lg:flex  ml-auto">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="">HOME</Link></li>
            <li >
              <Link to="/about">
                ABOUT 
              </Link>    
            </li>
            <li >
            <Link to="/appointment">
                APPOINTMENT 
              </Link>
            </li>
            <li><Link to="">REVIEWS</Link></li>
            <li><Link to="">CONTACT US</Link></li>
            {user ?<li><Link onClick={handleSignOut}>SignOut</Link></li>:<li><Link to="/login">LOGIN</Link></li>}
           
            <li>{user?.email}</li>
           
          </ul>
        </div>
      </div>
    );
};

export default Navbar;