import React from 'react';
import { Link } from 'react-router-dom';

const SingleBooking = ({data,index}) => {
 
    const {service,bookingDate,email,time,_id}=data
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{service}</td>
        <td>{bookingDate}</td>
        <td>{time}</td>
        <td>
          <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-sm btn-secondary" >  Pay</button></Link>
        </td>
      </tr>
    );
};

export default SingleBooking;