import React from 'react';
import { Wrapper, ImageWrapper, TitleWrapper, PreTitle, Name, JobTitle, BussinessCard, Button, SocialMedia, Line } from './index.styled';
import me from '@assets/images/me.JPG';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const HeroBanner: React.FC = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default HeroBanner;
