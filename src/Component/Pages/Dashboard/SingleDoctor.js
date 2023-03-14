import React from 'react';
const SingleDoctor = ({data,index,handleDelete}) => {
  // console.log(doctor)
    const {doctorName,doctorEmail,specialities,picture,_id}=data
    return (
        <tr>
        <th>{index+1}</th>
        <td><img src={picture} alt="" className='w-16' /></td>
        <td>{doctorName}</td>
        <td>{doctorEmail}</td>
        <td>{specialities}</td>
        <td><label htmlFor="deleting-modal" className="p-2 btn-error" onClick={()=>handleDelete(data)}>Delete</label></td>
      
      </tr>
      
    );
};


export default SingleDoctor;