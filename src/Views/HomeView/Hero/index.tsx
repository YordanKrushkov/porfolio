import React from 'react';
import { ImageWrapper, TitleWrapper, PreTitle, Name, JobTitle, BussinessCard, Button, SocialMedia, Line } from './index.styled';
import me from '@assets/images/me.JPG';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SectionWrapper } from '@components';

const HeroBanner: React.FC = () => {
  return (
    <SectionWrapper hero>
      <ImageWrapper>
        <img src={me} alt="asom"/>
      </ImageWrapper>
      <BussinessCard>
        <TitleWrapper>
          <PreTitle>I am</PreTitle>
          <Name>Yordan Krushkov</Name>
        </TitleWrapper>
        <JobTitle>
            Full Stack JavaScript Developer
        </JobTitle>
        <Button>Contact Me</Button>
      </BussinessCard>
      <SocialMedia>
        <Line/>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedinIn/>
        <FaGithub/>
      </SocialMedia>
    </SectionWrapper>

  );
};

export default HeroBanner;
