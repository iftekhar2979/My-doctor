import axios from 'axios';
import { useState } from 'react';
const GetTheUser=(email)=>{
    const [userData,setUserData]=useState(null)

    axios.post( `https://my-doctor-kw9l.onrender.com/findLoggedInUser?email=${email}`)
    .then(res=>{
        console.log(res.data)
     setUserData(res.data)})
    .catch((err)=>console.log(err.message))
    return {userData}

}
export default GetTheUser