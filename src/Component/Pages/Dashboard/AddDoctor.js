import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import postDocument from '../../hooks/postDocument';
import Button from '../../utiltiyComponent/Button';
import Loading from '../../utiltiyComponent/Loading';
import success from '../../utiltiyComponent/toastSuccessObj';

const AddDoctor = () => {
    const {register,handleSubmit}=useForm()
   const imgKey="a879ed1b150827ea6672ba50cad0c6b0"
   console.log(imgKey)
    const {data:specialites=[],isLoading}=useQuery({
        queryKey:['specialites'],
        queryFn:async()=>{
            const res= await fetch(`http://localhost:8000/specialities`)
            const data=await res.json()
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    const onSubmit=(obj)=>{

    const img=obj.picture[0]
  const {doctorName,doctorEmail,specialities}=obj
    const formData=new FormData()
    formData.append('image',img)
    const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imgKey}`
  fetch(url,{method:'POST',body:formData})
  .then(res=>res.json())
  .then(imgData=>{
    console.log(imgData.data
        )
    if(imgData.success){
       success(`Added ${doctorName} successfully`)
        postDocument(`http://localhost:8000/doctors`,{doctorName,doctorEmail,specialities,picture:imgData.data.display_url})
    }
  })
  .catch(err=>console.log(err))
    }
  return (
    <div>
      <h2 className='text-4xl text-center'>ADD DOCTOR</h2>
      <form className='flex justify-center items-center ' action='' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full  bg-base-100 rounded p-8 max-w-xs'>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            {...register('doctorName',{required:true})}
          />
          <label className='label'>
            <span className='label-text-alt'>Doctor Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            {...register('doctorEmail',{required:true})}
          />
          <label className='label'>
            <span className='label-text-alt'>Email</span>
          </label>
          <select className='select select-ghost w-full max-w-xs'>
            <option  selected>
              Pick the Your speatialites
            </option>
            {specialites?.map(item=><option {...register('specialities',{required:true})}>{item.name}</option>)}
            
          </select>
         
          <input type="file" {...register('picture')} className="file-input my-4  file-input-success w-full max-w-xs" />
          <Button>Add </Button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
