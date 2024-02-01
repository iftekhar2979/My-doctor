import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Payment = () => {
    const booking=useLoaderData()
    console.log(booking)
    const {email,patientName,bookingDate,service,time,price}=booking
    return (
        <div>
            <h1 className='text-center text-4xl bg-blue-200 my-4'>Your Billing</h1>
            <hr />
            <div className="flex justify-center bg-grey-700">
           <div className=''>
           <h1 className='text-xl'>Patient Name : {patientName}</h1>
           <h1 className='text-xl'>Patient Email : {email}</h1>
           <h1 className='text-xl'>Bill : $ {price}<span className='badge badge-primary ml-4'>due</span></h1>
          

           </div>

            </div>
           
        </div>
    );
};

export default Payment;