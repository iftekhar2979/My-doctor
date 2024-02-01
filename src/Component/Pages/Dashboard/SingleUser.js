import React from 'react';

const SingleUser = ({data,index,handleAdmin}) => {
    const {email,displayName,_id,role}=data
    return (
        <>
         <tr>
        <th>{index+1}</th>
        <td>{displayName}</td>
        <td>{email}</td>
        <td><button className={`btn btn-success ${role && "btn-warning"}`} onClick={()=>handleAdmin(_id)}>{role?"ADMIN":'Make Admin'}</button></td>
      </tr>
        </>
    );
};

export default SingleUser;