import React from 'react';
import SingleAppointment from './SingleAppointment';

const TotalAppoinment = ({data,selected,setService}) => {
//   console.log(data)
    return (
        <div className='grid  gap-6 md:grid-cols-2 lg:grid-cols-3 my-6'>
            {
                data?.map(item=><SingleAppointment key={item._id} data={item} selected={selected} setService={setService}></SingleAppointment>)
            }
        </div>
    );
};

export default TotalAppoinment;