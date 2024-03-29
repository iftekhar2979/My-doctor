import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/UserContext';
import Loading from '../../utiltiyComponent/Loading';
import SingleBooking from './SingleBooking';

const MyAppointment = () => {
    const {user}=useContext(AuthContext)
    const { data: myBooking = [],refetch,isLoading } = useQuery({
        queryKey: ['myBooking', user?.email],
        queryFn: async () => {
          const res = await fetch(
            `https://my-doctor-kw9l.onrender.com/userbooking?email=${user?.email}`,{
              headers:{
                authorization:`bearer ${localStorage.getItem('token')}`
              }
            }
          );
          const data = await res.json();
          return data;
        },
      });
      
      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div className=''>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Pateinet Name</th>
        <th>treatment</th>
        <th>Booking Date</th>
        <th>Visiting Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {Array.isArray(myBooking) &&myBooking?.map((item,index)=><SingleBooking key={item._id} index={index} data={item}></SingleBooking>)}
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default MyAppointment;