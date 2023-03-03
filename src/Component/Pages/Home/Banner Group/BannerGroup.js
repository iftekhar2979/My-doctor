import React from 'react';
import BannerCard from './BannerCard';

const BannerGroup = () => {
  const bannergroup = [
    {
      id: 12,
      image:
        'https://www.pngmart.com/files/6/Clock-PNG-Transparent.png',
      title: 'Opening Hours',
      details: 'We will open our hospital at 2.00 am',
      bg: 'bg-gradient-to-r from-lime-300 to-lime-500',
    },
    {
      id: 13,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Location_icon_from_Noun_Project.png/768px-Location_icon_from_Noun_Project.png',
      title: 'Our Location',
      details: 'Mirpur -1, Dhaka ,Bangladesh',
      bg: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
    },
    {
      id: 14,
      image:
        'https://static.vecteezy.com/system/resources/previews/009/344/685/original/telephone-transparent-free-png.png',
      title: 'Contact Us Now',
      details: '01837352979',
      bg: 'bg-gradient-to-r from-green-300 to-green-600',
    },
  ];
  return (
    <div className='grid  grid-cols-3 gap-4 my-6'>
      {bannergroup?.map((item) => (
        <BannerCard key={item.id} data={item}></BannerCard>
      ))}
    </div>
  );
};

export default BannerGroup;
