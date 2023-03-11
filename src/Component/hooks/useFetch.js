import axios from 'axios';
import { useEffect, useState } from 'react';
const useFetch = (email) => {
   const [userData,setUserData]=useState(null)
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   useEffect(()=>{
    setLoading(true)
  console.log(email)
    axios.get(`http://localhost:8000/findLoggedInUser?email=${email}`)
    .then(responce=>  {
        console.log(responce.data)
       setUserData(responce.data)}
    ).catch(error=>setError(error)
    ).finally(()=>setLoading(false))
   },[email])
   return {userData,loading,error,setUserData}
};

export default useFetch;