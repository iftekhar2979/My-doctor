import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../utiltiyComponent/Loading';
import Modal from '../../utiltiyComponent/Modal';
import AvailableAppointment from './AvailableAppointment';
import Hero from './Hero';
import TotalAppoinment from './TotalAppoinment';

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [service, setService] = useState(null);
  let selectedDate = format(selected, 'PP');
  const { data: totalAppointments = [],refetch,isLoading } = useQuery({
    queryKey: ['totalAppointments', selectedDate],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/appointments?bookingDate=${selectedDate}`
      );
      const data = await res.json();
      return data;
    },
  });
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <Hero selected={selected} setSelected={setSelected}></Hero>
      <AvailableAppointment selected={selected}></AvailableAppointment>
      <TotalAppoinment
        totalAppointments={totalAppointments}
        selected={selected}
        setService={setService}
      ></TotalAppoinment>

      {service && (
        <Modal
          service={service}
          setService={setService}
          selected={selected}
          refetch={refetch}
        ></Modal>
      )}
    </div>
  );
};

export default Appointment;
