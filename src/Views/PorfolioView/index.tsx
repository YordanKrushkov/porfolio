import { Title } from '@Views/HomeView/About/index.styled';
import HeroBanner from '@Views/HomeView/Hero';
import React from 'react';
import Experiance from './experiance';
import { HiOutlineCloudDownload } from 'react-icons/hi';
import { Download } from './index.styled';
import { SectionWrapper } from '@components';
const PortfolioView: React.FC = () => {
  return (
    <>
      <HeroBanner/>
      <SectionWrapper secondary>
        <Download>
          <HiOutlineCloudDownload/>
          <p>Download CV</p>
        </Download>
        <Title>Work Experience</Title>
        <Experiance/>
      </SectionWrapper>
    </>
  );
};

export default PortfolioView;
