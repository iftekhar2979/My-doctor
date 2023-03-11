import axios from 'axios';
import { useEffect, useState } from 'react';
const useCheckAdmin = (email) => {
    const [isAdmin,setIsAdmin]=useState()
    const [isErr,setIsErr]=useState()
    useEffect(()=>{
        if(email){
            axios.get(`http://localhost:8000/user/admin/${email}`)
            .then(res=>setIsAdmin(res.data))
            .catch(error=>setIsErr(error))
        }
    },[email])
    return {isAdmin,isErr}
};

export default useCheckAdmin;