import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import email from '../../../asset/email.svg';
import github from '../../../asset/github.svg';
import google from '../../../asset/google.svg';
import password from '../../../asset/password.svg';
import { AuthContext } from '../../Context/UserContext';
import Button from '../../utiltiyComponent/Button';
const Login = () => {
  const {signIn,setUser}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit=(obj)=>{
    const {email,password}=obj
signIn(email,password)
.then(result=>{
  const user=result.user
  setUser(user)
  
}).catch(err=>console.log(err.message))

  }
  return (
    <div className='bg-base-300'>
      <div className='p-8 lg:w-1/2 mx-auto'>
        <div className='bg-white rounded-t-lg p-8'>
          <p className='text-center text-sm text-gray-400 font-light'>
            Sign up with
          </p>
          <div>
            <div className='flex items-center justify-center space-x-4 mt-3'>
              <button className='flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'>
                <img src={github} alt='' className='w-8 sm:w-4' />
                Github
              </button>
              <button className='flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'>
                <img src={google} alt='' className='w-8 sm:w-4' />
                Google
              </button>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24'>
          <p className='text-center text-sm text-gray-500 font-light'>
            Or sign up with credentials
          </p>
          <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='relative mt-3'>
              <input
                className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
                
                type='text'
                placeholder='Email'
                {...register("email")}
              />
              <div className='absolute left-0 inset-y-0 flex items-center'>
                <img src={email} alt='' className='pl-2 w-6' />
              </div>
            </div>
            <div className='relative mt-3'>
              <input
                className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
              
                type='password'
                placeholder='Password'
                {...register("password")}
              />
              <div className='absolute left-0 inset-y-0 flex items-center'>
                <img src={password} alt='' className='pl-2 w-6' />
              </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
              <Button className=' hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'>
                Sign In
              </Button>
              <div className='divider-vertical'></div>
            </div>
          </form>
              <div>Don't Have Any Account <Link to="/signUp" className='text-indigo-600 underline'>Sign up</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
