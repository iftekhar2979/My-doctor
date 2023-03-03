import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selected}) => {
    return (
        <div>
            <p className='text-center text-2xl text-green-400 font-bold'>{selected?`Available Appoinment on ${format(selected, 'PP')}`:"please select date"}</p>
        </div>
    );
};

export default AvailableAppointment;