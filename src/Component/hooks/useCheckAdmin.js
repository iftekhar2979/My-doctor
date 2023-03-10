import axios from 'axios';
import { useEffect, useState } from 'react';
const useCheckAdmin = (email) => {
    const [isAdmin,setIsAdmin]=useState()
    const [isErr,setIsErr]=useState()
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(()=>{
        if(email){
            axios.get(`http://localhost:8000/user/admin/${email}`)
            .then(res=>{
                console.log(res.data)
                setIsAdmin(res.data)
                setIsAdminLoading(false)
            })
            .catch(error=>setIsErr(error))
        }
    },[email])
    return [isAdmin,isAdminLoading]
};

export default useCheckAdmin;