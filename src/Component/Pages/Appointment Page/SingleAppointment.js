import React from 'react';

const SingleAppointment = ({data,selected,setService}) => {
  
    const {name,slots}=data
    
    
    
    return (
        <div className="card card-compact w-auto bg-gradient-to-r from-green-100 to-green-300 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{slots[0]}</p>
          <p>{slots.length? `${slots.length} are availible`:"no space availibe"}</p>
         
          <label htmlFor="booking-Modal" onClick={()=>setService(data)}  className={`btn btn-warning ${slots.length===0 ? "btn-disabled cursor-not-allowed focus:outline-none disabled:opacity-75":""}`}>Book Now</label>
         
        </div>
      </div>
    );
};

export default SingleAppointment;