import React from 'react';
import About from './About';
import Testemonial from './Testemonial';
import HeroBanner from './Hero';
import Projects from './Projects';

const HomeView: React.FC = () => {
  return (
    <>
      <HeroBanner/>
      <About/>
      <Projects/>
      <Testemonial/>
    </>
  );
};
export default HomeView;
