import React from 'react';
import Button from '../../../utiltiyComponent/Button';
const ServiceHero = () => {
    return (
        <div className="hero m-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://www.stlukeshealth.org/content/dam/stlukeshealth/images/headers/boxed/doctor-talks-to-patient-before-surgery.png/jcr:content/renditions/cq5dam.web.1120.933.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
       
    );
};

export default ServiceHero;