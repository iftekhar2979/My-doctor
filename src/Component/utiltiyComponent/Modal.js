import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Component/utiltiyComponent/Button';

const Modal = ({ service, selected, setService }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (obj) => {
    console.log(obj);
    setService('');
  };
  return (
    <div className='flex justify-center'>
      <input type='checkbox' id='booking-Modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box w-96 '>
        <label htmlFor="booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className='font-bold text-lg'>{service?.name}</h3>
          <form action='' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs bg-warning'
                defaultValue={selected}
                {...register('date', { required: true })}
              />
            </div>
            <div className='my-2'>
              <select
                className='select select-primary w-full max-w-xs'
                {...register('time', { required: true })}
              >
                {service?.slots.map((options) => (
                  <option>{options}</option>
                ))}
              </select>
            </div>
            <div className='my-2 w-auto'>
              <input
                type='text'
                placeholder='Your Name'
                {...register('name', { required: true })}
                aria-invalid={errors.name ? 'true' : 'false'}
                className='input input-bordered w-full max-w-xs'
              />
              {errors.name?.type === 'required' && <p className="text-error">Name is required</p>}
            </div>
            <div className='my-2'>
              <input
                type='text'
                placeholder='Your Email'
                {...register('email', { required: true })}
                aria-invalid={errors.email?'true':'false'}
                className='input input-bordered w-full max-w-xs'
              />
               {errors.email?.type === 'required' && <p className="text-error">Email is required</p>}
            </div>
            <div className='my-2'>
              <input
                type='text'
                placeholder='Your Phone Number'
                {...register('phoneNumber', { required: true })}
                aria-invalid={errors.phoneNumber?'true':'false'}
                className='input input-bordered w-full max-w-xs'
              />
              {errors.phoneNumber?.type === 'required' && <p className="text-error">Phone Number is required</p>}
            </div>
            <div className='modal-action flex justify-center'>
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
