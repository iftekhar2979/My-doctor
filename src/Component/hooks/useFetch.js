import axios from 'axios';
import { useEffect, useState } from 'react';
const useFetch = (email) => {
   const [userData,setUserData]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)
  (email)
    axios.get(`https://my-doctor-kw9l.onrender.com/findLoggedInUser?email=${email}`)
    .then(responce=>  {
        
       setUserData(responce.data)}
    ).catch(error=>setError(error)
    ).finally(()=>setLoading(false))
   },[email])
   return {userData,loading,error,setUserData}
};

export default useFetch;