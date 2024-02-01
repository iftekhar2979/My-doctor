import React from 'react';
import { useQuery } from 'react-query';
import Table from '../../utiltiyComponent/Table';
import SingleBooking from './SingleBooking';

const TotalOrders = () => {
    const { data: totalBookings = {},refetch,isLoading } = useQuery({
        queryKey: ['totalBookings', ],
        queryFn: async () => {
          const res = await fetch(
            `https://my-doctor-kw9l.onrender.com/totalOrders`,{
              headers:{
                authorization:`bearer ${localStorage.getItem('token')}`
              }
            }
          );
          const data = await res.json();
      
          return data;
        },
      });
    return (
        <div>
            <Table
            name={'Patient Name'}
            treatment={'TreatMent'}
            date={"visiting Date"}
            visit={'Time'}
            price={'price'}
            >
  {Array.isArray(totalBookings.totalOrders) &&totalBookings.totalOrders?.map((item,index)=><SingleBooking key={item._id} index={index} data={item}></SingleBooking>)}

            </Table>
        </div>
    );
};

export default TotalOrders;