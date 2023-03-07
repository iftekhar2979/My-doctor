import React from 'react';

const SingleBooking = ({data,index}) => {
    console.log(data)
    const {service,bookingDate,email,time}=data
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{service}</td>
        <td>{bookingDate}</td>
        <td>{time}</td>
      </tr>
    );
};

export default SingleBooking;