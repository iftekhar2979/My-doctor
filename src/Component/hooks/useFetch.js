import axios from 'axios';
import { useEffect, useState } from 'react';
const useFetch = (url,email) => {
   const [userData,setUserData]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)
  
    axios.get(`${url}=${email}`).then(responce=>{
        setUserData(responce.data)
    }).catch(error=>{
        setError(error)
    }).finally(()=>{
        setLoading(false)
    })
   },[url,email])
   return {userData,loading,error,setUserData}
};

export default useFetch;