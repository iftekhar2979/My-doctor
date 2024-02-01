import React from 'react';
import HeadingSection from '../../utiltiyComponent/HeadingSection';
import AppointmentBanner from './Appointment/AppointmentBanner';

import SignUp from '../../Pages/Login/SignUp';
import BannerGroup from './Banner Group/BannerGroup';
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
      <HeadingSection>Testominials</HeadingSection>
      <AppointmentBanner></AppointmentBanner>
      <HeadingSection>
        Contact Us, Create Your Account or Sign In your account
      </HeadingSection>
      <SignUp></SignUp>
    </>
  );
};

export default Home;
