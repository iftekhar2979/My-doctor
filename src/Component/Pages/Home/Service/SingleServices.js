import React from 'react';
import leftArrow from "../../../../asset/leftArrow.svg";
import Button from '../../../utiltiyComponent/Button';
const SingleServices = ({data}) => {
    const {title,image,details}=data
    return (
       
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <img className="rounded-t-lg" src={image} alt={title} />

    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
   
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.slice(1,50)}<span className='font-bold'>...</span></p>
       <Button className="my-4">
       Read more
           <img src={leftArrow} alt="" className='w-4' />
       </Button>
     
    </div>
</div>

    );
};

export default SingleServices;