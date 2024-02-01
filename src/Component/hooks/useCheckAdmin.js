import axios from 'axios';
import { useEffect, useState } from 'react';
const useCheckAdmin = (email) => {
    const [isAdmin,setIsAdmin]=useState()
    const [isErr,setIsErr]=useState()
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(()=>{
        if(email){
            axios.get(`https://my-doctor-kw9l.onrender.com/user/admin/${email}`)
            .then(res=>{

                setIsAdmin(res.data)
                setIsAdminLoading(false)
            })
            .catch(error=>setIsErr(error))
        }
    },[email])
    return [isAdmin,isAdminLoading]
};

export default useCheckAdmin;