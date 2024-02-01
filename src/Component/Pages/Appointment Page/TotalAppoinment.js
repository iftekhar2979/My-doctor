import React from 'react';
import Loading from '../../utiltiyComponent/Loading';
import SingleAppointment from './SingleAppointment';

const TotalAppoinment = ({totalAppointments,selected,setService,isLoading}) => {
    if(isLoading){
        return <Loading></Loading>
      }

    return (
        <div className='grid  gap-6 md:grid-cols-2 lg:grid-cols-3 my-6'>
            {
                
                totalAppointments?.map(item=><SingleAppointment key={item._id} data={item} selected={selected} setService={setService}></SingleAppointment>)
            }
        </div>
    );
};

export default TotalAppoinment;