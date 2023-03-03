import React from 'react';
import doctor from '../../../../asset/doctor-small.png';
const AppointmentBanner = () => {
    return (
        <div className="hero  img-bg-appointment bg-base-200 relative ">
  <div className="hero-content flex-col lg:flex-row relative">
    <img src={doctor} className="hidden lg:block max-w-sm  shadow-2xl h-100" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;