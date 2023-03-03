import React from 'react';
import HeadingSection from '../../utiltiyComponent/HeadingSection';
import AppointmentBanner from './Appointment/AppointmentBanner';

import BannerGroup from './Banner Group/BannerGroup';
import SignUp from './Contact/SignUp';
import Banner from './Hero/Banner';
import Services from './Service/Services';
import ServiceHero from './ServiceHero/ServiceHero';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <BannerGroup></BannerGroup>
      <HeadingSection>
        Our Services, Here is all about our services
      </HeadingSection>
      <Services></Services>
      <ServiceHero></ServiceHero>
      <AppointmentBanner></AppointmentBanner>
      <SignUp></SignUp>
    </>
  );
};

export default Home;
