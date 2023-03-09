import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/UserContext';
import SingleBooking from './SingleBooking';

const MyAppointment = () => {
    const {user}=useContext(AuthContext)
    const { data: myBooking = [],refetch,isLoading } = useQuery({
        queryKey: ['myBooking', user?.email],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:8000/userbooking?email=${user?.email}`
          );
          const data = await res.json();
          return data;
        },
      });
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
      </tr>
    </thead>
    <tbody>
    {myBooking?.map((item,index)=><SingleBooking key={item._id} index={index} data={item}></SingleBooking>)}
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default MyAppointment;