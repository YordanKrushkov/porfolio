import React from 'react';
import About from './About';
import Testemonial from './Testemonial';
import HeroBanner from './Hero';

const HomeView: React.FC = () => {
  return (
    <>
      <HeroBanner/>
      <About/>
      <Testemonial/>
    </>
  );
};
export default HomeView;
