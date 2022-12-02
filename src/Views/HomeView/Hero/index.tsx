import React, { useCallback } from 'react';
import { ImageWrapper, TitleWrapper, PreTitle, Name, JobTitle, BussinessCard, Button, SocialMedia, Line } from './index.styled';
import me from '@assets/images/me.JPG';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SectionWrapper } from '@components';
import { useLocation, useNavigate } from 'react-router-dom';
const HeroBanner: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateTo = useCallback(() => { navigate('/contacts'); }, []);
  const navigateToUrl = (url: string): void => {
    window.open(url, '_blank');
  };
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
        {pathname !== '/contacts' && <Button onClick={navigateTo}>Contact Me</Button> }
      </BussinessCard>
      <SocialMedia>
        <Line/>
        <FaFacebook onClick={() => navigateToUrl('https://www.facebook.com/krushkov.yordan/')}/>
        <FaTwitter onClick={() => navigateToUrl('https://twitter.com/yordankrushkov')}/>
        <FaInstagram onClick={() => navigateToUrl('https://instagram.com/yordankrushkov')}/>
        <FaLinkedinIn onClick={() => navigateToUrl('https://www.linkedin.com/in/yordan-krushkov/')}/>
        <FaGithub onClick={() => navigateToUrl('https://github.com/YordanKrushkov')}/>
      </SocialMedia>
    </SectionWrapper>

  );
};

export default HeroBanner;
