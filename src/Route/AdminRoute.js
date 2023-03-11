import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/Context/UserContext';
import useCheckAdmin from '../Component/hooks/useCheckAdmin';
import Loading from '../Component/utiltiyComponent/Loading';
const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const {isAdmin}=useCheckAdmin(user?.email)
    const location=useLocation()
    // console.log(loading);
    if(loading){
        return <Loading></Loading>
    }
    if(user && isAdmin?.isAdmin ){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;