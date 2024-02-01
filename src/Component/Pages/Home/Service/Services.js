import React from 'react';
import SingleServices from './SingleServices';

const Services = () => {
  const serviceDetails = [
    {
      id: 21,
      title: 'Physiotherapy',
      image:
        'https://patientcarehomeservicebd.com/wp-content/uploads/2018/07/physiotherapy.jpg',
      details:
        'Physiotherapy helps restore movement and function when someone is affected by injury, illness or disability. Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice. They maintain health for people of all ages, helping patients to manage pain and prevent disease.The profession helps to encourage development and facilitate recovery, enabling people to stay in work while helping them to remain independent for as long as possible.',
    },{
        id:22,
        title:"Neuro Patient Care",
        image:"https://patientcarehomeservicebd.com/wp-content/uploads/2018/07/Neuro-Patient-Care.jpg",
        details:"A principle objective for people with long term disability due to neurological disease, whether it be stable or progressive, is to live an independent life in the community for as long as possible. The neurological management of these patients aims to reduce their disability and consequent handicap within society. The most basic needs to allow independent living are access to information, advice and treatments from appropriate clinical specialists, counselling, housing, provision of aids and equipment, personal help, transport, and access to society"
    },{
        id:23,
        title:"Surgical Items",
        image:"https://patientcarehomeservicebd.com/wp-content/uploads/2018/07/Surgical-Items.jpg",
        details:`These quality Surgical Instruments include Scissors, Forceps, Clamps, Needle Holders, Electrodes, Knives, Blades, Retractors and Fiber Optic Headlights.
        Cases.
        Ear, Nose and Throat.
        Forceps.
        Instrument Care.
        Plastic Surgery.`
    }
  ];
  return <section className='grid grid-cols-3 gap-4 my-6'>
    {
       serviceDetails.map(item=><SingleServices data={item} key={item.id}></SingleServices>) 
    }
  </section>;
};

export default Services;
