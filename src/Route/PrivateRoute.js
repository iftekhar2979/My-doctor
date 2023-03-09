import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/Context/UserContext';
import Loading from '../Component/utiltiyComponent/Loading';
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    // console.log(loading);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.uid ){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;