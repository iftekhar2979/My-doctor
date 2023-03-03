import React from 'react';
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
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </Button>
     
    </div>
</div>

    );
};

export default SingleServices;