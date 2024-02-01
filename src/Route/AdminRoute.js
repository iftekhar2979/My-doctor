import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/Context/UserContext';
import useCheckAdmin from '../Component/hooks/useCheckAdmin';
import Loading from '../Component/utiltiyComponent/Loading';
const AdminRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=useCheckAdmin(user?.email)
    const location=useLocation()
   

    if(loading || isAdminLoading ){
        return <Loading></Loading>
    }
    if(isAdmin?.isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;