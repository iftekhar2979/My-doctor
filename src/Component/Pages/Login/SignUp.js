import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const SignUp = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const {createNewUser,setUser}=useContext(AuthContext)
  const onSubmit = (obj) => {
    const {displayName,email,password,address,city}=obj
    console.log(email,password)
    createNewUser(email,password)
    .then(result=>{
       const user=result.user
      console.log(user)
       setUser(user)
    }).catch(err=>{
       console.log("err : ",err.message)
    })
   }

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
                      <label for='full_name'>Full Name</label>
                      <input
                        type='text'
                        name='full_name'
                        id='full_name'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('displayName')}
                      />
                    </div>

                    <div className='md:col-span-5'>
                      <label for='email'>Email Address</label>
                      <input
                        type='text'
                        name='email'
                        id='email'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('email')}
                        placeholder='email@domain.com'
                      />
                    </div>

                    <div className='md:col-span-3'>
                      <label for='address'>Address / Street</label>
                      <input
                        type='text'
                        name='address'
                        id='address'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('Address')}
                        placeholder=''
                      />
                    </div>

                    <div className='md:col-span-2'>
                      <label for='city'>City</label>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('city')}
                        placeholder=''
                      />
                    </div>
                    <div className='md:col-span-3'>
                      <label for='password'>Password</label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('password')}
                        placeholder=''
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <label for='confirmPassword'>Confirm Password</label>
                      <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        {...register('confirmPassoword')}
                        placeholder=''
                      />
                    </div>
                    <div className='md:col-span-5'>
                      <div className='inline-flex items-center'>
                        <input
                          type='checkbox'
                          name='billing_same'
                          id='billing_same'
                          className='form-checkbox'
                          {...register('termandCondition')}
                        />
                        <label for='billing_same' className='ml-2'>
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
