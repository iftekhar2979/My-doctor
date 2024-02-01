import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import postDocument from '../../hooks/postDocument';
const SignUp = () => {
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (obj) => {
    const { displayName, email, password, address, city } = obj;

    // ({ ...obj });
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(displayName);
        // setFormData({ ...obj });
        postDocument('https://my-doctor-kw9l.onrender.com/createUser',{...obj})
        delete obj.password
        delete obj.confirmPassoword
        setUser({user,...obj});
      })
      .catch((err) => {
        console.log('err : ', err.message);
      });
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
              <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
                <div className='text-gray-600'>
                  <p className='font-medium text-lg'>Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className='lg:col-span-2'>
                  <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                    <div className='md:col-span-5'>
                      <label htmlFor='full_name'>Full Name</label>
                      <input
                        type='text'
                        name='full_name'
                        id='full_name'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                          errors.displayName?.type === 'required' &&
                          'border-red-400 shadow-md'
                        }`}
                        {...register('displayName', { required: true })}
                        aria-invalid={errors.displayName ? 'true' : 'false'}
                        placeholder={
                          errors.displayName?.type === 'required' &&
                          'Name is required'
                        }
                      />
                    </div>
                    <div></div>

                    <div className='md:col-span-5'>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        type='email'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                          errors.email?.type === 'required' &&
                          ' border-red-400 shadow-md'
                        }`}
                        {...register('email', { required: true })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder={
                          errors.email?.type === 'required' &&
                          'Email is required'
                        }
                      />
                    </div>

                    <div className='md:col-span-3'>
                      <label >Address / Street</label>
                      <input
                        type='text'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('address')}
                        placeholder=''
                      />
                    </div>

                    <div className='md:col-span-2'>
                      <label >City</label>
                      <input
                        type='text'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('city')}
                        placeholder=''
                      />
                    </div>
                    <div className='md:col-span-3'>
                      <label >Password</label>
                      <input
                        type='password'
                        className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                          errors.email?.type === 'required' &&
                          ' border-red-400 shadow-md'
                        }`}
                        {...register('password', { required: true })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        placeholder={
                          errors.password?.type === 'required' &&
                          'password is required'
                        }
                      />
                    </div>

                    <div className='md:col-span-2'>
                      <label htmlFor='confirmPassword'>Confirm Password</label>
                      <input
                        type='password'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('confirmPassoword', { required: true })}
                        placeholder=''
                      />
                    </div>
                    <div className='md:col-span-5'>
                      <div className='inline-flex items-center'>
                        <input
                          type='checkbox'
                          className='form-checkbox'
                          {...register('termandCondition')}
                        />
                        <label htmlFor='billing_same' className='ml-2'>
                          Terms and Condition
                        </label>
                      </div>
                    </div>

                    <div className='md:col-span-5 text-right'>
                      <div className='inline-flex items-end'>
                        <button
                          type='submit'
                          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                Already Have Account{' '}
                <Link to='/login' className='text-indigo-600 underline'>
                  Log In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
