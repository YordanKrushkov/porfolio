import { Line, Title } from '@Views/HomeView/About/index.styled';
import { Description, Wrapper, Form, Input, TextArea, Button, SocialWrapper, Social } from './index.styled';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import React, { useRef, useEffect } from 'react';
import { SectionWrapper } from '@components';
import HeroBanner from '@Views/HomeView/Hero';
const ContactView: React.FC = () => {
  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      (formRef.current as HTMLFormElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const navigateTo = (url: string): void => {
    window.open(url, '_blank');
  };
  return (
    <>
      <HeroBanner/>
      <SectionWrapper>
        <Title>Contact me</Title>
        <Wrapper justify={'flex-start'}>
          <Line/>
          <Description>
            If you have request or question, don&apos;t hesitate to contact me using the form below
          </Description>
        </Wrapper>
        <Wrapper justify={'center'}>

          <Form ref={formRef}>
            <Wrapper justify={'center'}>
              <Input type='text' id='name' placeholder='Name'/>
              <Input type='email' id='email' placeholder='Email'/>
            </Wrapper>
            <Input type='text' id='subject' placeholder='Subject'/>
            <TextArea id='message' placeholder='Message'></TextArea>
            <Button>Send</Button>
          </Form>
          <SocialWrapper>
            <p>Follow Me</p>
            <Social>
              <FaFacebook onClick={() => navigateTo('https://www.facebook.com/krushkov.yordan/')}/>
              <FaTwitter onClick={() => navigateTo('https://twitter.com/yordankrushkov')}/>
              <FaInstagram onClick={() => navigateTo('https://instagram.com/yordankrushkov')}/>
              <FaLinkedinIn onClick={() => navigateTo('https://www.linkedin.com/in/yordan-krushkov/')}/>
              <FaGithub onClick={() => navigateTo('https://github.com/YordanKrushkov')}/>
            </Social>
          </SocialWrapper>
        </Wrapper>
      </SectionWrapper>

    </>
  );
};

export default ContactView;
