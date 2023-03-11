import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import SingleUser from './SingleUser';

const Alluser = () => {
    
  const {
    data: allUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/allUser`);
      const data = await res.json();
      return data;
    },
  });
  const handleAdmin=(id)=>{
    axios.put(`http://localhost:8000/dashboard/admin/${id}`,{role:'admin'},{
        headers:{
          authorization:`bearer ${localStorage.getItem('token')}`
        }
      })
    .then(res=>{
        console.log(res.data)
    if(res.data.role){
        refetch()
    }
    })
    .catch(error=>console.log(error))
  }
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {allUsers.map((item,index) => <SingleUser key={item._id} index={index} data={item} handleAdmin={handleAdmin}></SingleUser>)}
     

    </tbody>
  </table>
</div>
    </div>
  );
};

export default Alluser;
