import React, { useEffect, useState } from 'react';
import Modal from '../../utiltiyComponent/Modal';
import AvailableAppointment from './AvailableAppointment';
import Hero from './Hero';
import TotalAppoinment from './TotalAppoinment';

const Appointment = () => {
    const [selected,setSelected]=useState(new Date())
    const [totalAppointments,setTotalAppoinments]=useState()
    const [service,setService]=useState(null)
    useEffect(()=>{

        fetch('totalappointment.json')
        .then(res=>res.json())
        .then(data=>setTotalAppoinments(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <Hero selected={selected} setSelected={setSelected}></Hero>
            <AvailableAppointment selected={selected}></AvailableAppointment>
            <TotalAppoinment data={totalAppointments} selected={selected} setService={setService}></TotalAppoinment>
           
           {
            service && <Modal service={service} setService={setService} selected={selected}></Modal>
           }
            
        </div>
    );
};

export default Appointment;