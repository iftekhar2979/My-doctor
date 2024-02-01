import React from 'react';

const BannerCard = ({ data }) => {
  const { image, title, details, bg } = data;
 
  return (
    <div className={`card w-auto ${bg} text-primary-content`}>
      <div className='flex p-8'>
        <div className='w-24'>
          <img src={image} alt=''   />
        </div>
        <div className='pl-4'>
          <h2 className='card-title text-2xl'>{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
