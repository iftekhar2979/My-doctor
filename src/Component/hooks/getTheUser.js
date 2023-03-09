import axios from 'axios'
const getTheUser=(email)=>{
    
    return (
    axios.get( `http://localhost:8000/findLoggedInUser?email=${email}`)
    .then(res=>{
       return res.data})
    .catch((err)=>console.log(err.message))
    )
}
export default getTheUser