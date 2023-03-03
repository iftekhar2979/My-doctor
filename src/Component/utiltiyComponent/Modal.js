import React from 'react';

const Modal = ({ service, selected }) => {
  
  return (
    <div className='flex justify-center'>
      <input type='checkbox' id='my-modal-6' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box w-96'>
          <h3 className='font-bold text-lg'>{service?.name}</h3>
          <form action=''>
            <div>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs bg-warning'
                defaultValue={selected}
              />
            </div>
            <div className='my-2'>
              <select className='select select-primary w-full max-w-xs'>
                {service?.slots.map((options) => (
                  <option>{options}</option>
                ))}
              </select>
            </div>
            <div className='my-2 w-auto'>
              <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='my-2'>
              <input
                type='text'
                placeholder='Your Email'
                className='input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='my-2'>
              <input
                type='text'
                placeholder='Your Phone Number'
                className='input input-bordered w-full max-w-xs'
              />
            </div>
          </form>
          <div className='modal-action flex justify-center'>
            <label htmlFor='my-modal-6' className='btn'>
             Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
