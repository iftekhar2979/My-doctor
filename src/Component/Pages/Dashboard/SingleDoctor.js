import React from 'react';

const SingleDoctor = ({data,index}) => {
    const {doctorName,doctorEmail,specialities,picture}=data
    return (
        <tr>
        <th>{index+1}</th>
        <td><img src={picture} alt="" className='w-16' /></td>
        <td>{doctorName}</td>
        <td>{doctorEmail}</td>
        <td>{specialities}</td>
      </tr>
    );
};

export default SingleDoctor;