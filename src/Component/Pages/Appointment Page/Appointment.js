import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Modal from '../../utiltiyComponent/Modal';
import AvailableAppointment from './AvailableAppointment';
import Hero from './Hero';
import TotalAppoinment from './TotalAppoinment';

const Appointment = () => {
    const [selected,setSelected]=useState(new Date())
    // const [totalAppointments,setTotalAppoinments]=useState()
    const [service,setService]=useState(null)
 
    const {data:totalAppointments=[]}=useQuery({
        queryKey:"totalAppointments",
        queryFn:async()=>{
            const res=await fetch("http://localhost:8000/appointments")
            const data=await res.json()
            return data
        }
    }
    )
    // console.log(totalAppointments)
    // useEffect(()=>{

    //     fetch('totalappointment.json')
    //     .then(res=>res.json())
    //     .then(data=>setTotalAppoinments(data))
    //     .catch(err=>console.log(err))
    // },[])
    return (
        <div>
            <Hero selected={selected} setSelected={setSelected}></Hero>
            <AvailableAppointment selected={selected}></AvailableAppointment>
            <TotalAppoinment totalAppointments={totalAppointments}  selected={selected} setService={setService}></TotalAppoinment>
           
           {
            service && <Modal service={service} setService={setService} selected={selected}></Modal>
           }
            
        </div>
    );
};

export default Appointment;