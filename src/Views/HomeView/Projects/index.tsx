import { SectionWrapper } from '@components';
import React from 'react';
import { Title } from '../About/index.styled';
import { Wrapper } from '../Testemonial/index.styled';
import hampden from '@assets/images/hampden.png';
import actico from '@assets/images/actico.png';
import codete from '@assets/images/codete.png';
import dope from '@assets/images/dope.png';
import Tu from '@assets/images/Tu.jpeg';
import round from '@assets/images/round.jpg';
import { Container, Image, ProjectTitle, Subtitle, Description } from './index.styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper';

const Projects: React.FC = () => {
  const swiperBreakpoints = {
    800: {
      slidesPerView: 1
    },
    1400: {
      slidesPerView: 1.4
    }

  };
  const goTo = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <SectionWrapper>
      <Title>Projects</Title>
      <Swiper
        modules={[Mousewheel, Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        spaceBetween={10}
        mousewheel={{ forceToAxis: true }}
        breakpoints={swiperBreakpoints}
        grabCursor
        speed={1200}
        autoplay={{ disableOnInteraction: false, pauseOnMouseEnter: true, reverseDirection: true }}
        style={{ margin: '30px 0' }}
      >
        <SwiperSlide>
          <Wrapper onClick={() => goTo('https://www.hampden.co.uk/')}>
            <Container>
              <ProjectTitle>HAMPDEN</ProjectTitle>
              <Subtitle>DCSL GuideSmiths</Subtitle>
              <Image>
                <img src={hampden} alt="project1" />
              </Image>
              <Description>Hampden Group is a leading provider of specialist insurance, investment and financial support services.</Description>
              <Description>Working on the front-end side with technologies such as <span>Vue 2, SASS, Bootstrap</span></Description>
            </Container>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper onClick={() => goTo('https://www.actico.com/')}>
            <Container>
              <ProjectTitle>ACTICO</ProjectTitle>
              <Subtitle>Devision</Subtitle>
              <Image>
                <img src={actico} alt="project2" />
              </Image>
              <Description>ACTICO Platform is a powerful software for intelligent decision automation.
            It combines business rules and machine learning with automation technology.
              </Description>
              <Description>Working on the front-end side with technologies such as <span>Angular 14, NGZoro, SASS, Cypress, Jest</span></Description>
            </Container>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <Container>
              <ProjectTitle onClick={() => goTo('https://play.google.com/store/apps/details?id=co.agileapp.RoundApp&hl=en&gl=US')}>ROUND APP</ProjectTitle>
              <Subtitle>DCSL GuideSmiths</Subtitle>
              <Image>
                <img src={round} alt="project3" />
              </Image>
              <Description>Allowing you to order food & drink to your table, from your phone.
           Select from your favourite bars & pubs. Browse entire menus. Customise products. Order to your table or for bar collection
              </Description>
              <Description>Working on the front-end side with technologies such as <span>Vue 2, SASS, Bootstrap</span></Description>
            </Container>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper onClick={() => goTo('https://www.codete.com/')}>
            <Container>
              <ProjectTitle >Codete</ProjectTitle>
              <Subtitle>Devision</Subtitle>
              <Image>
                <img src={codete} alt="project4" />
              </Image>
              <Description>Trusted partner in software development and IT consulting </Description>
              <Description>Working on the front-end side with technologies such as <span>React, NextJS, Tailwind, Strapi, Docker, Mongo Atlas</span></Description>
            </Container>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper onClick={() => goTo('https://thisisdope.com/')}>
            <Container>
              <ProjectTitle >THISISDOPE</ProjectTitle>
              <Subtitle>WIT EOOD</Subtitle>
              <Image>
                <img src={dope} alt="project5" />
              </Image>
              <Description>A place to share, rate & talk about dope stuff. </Description>
              <Description>Working on the front-end side and creating a brand new mobile app with technologies such as <span>React, React Native, NextJS, Native-Base, GraphQL</span></Description>
            </Container>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper onClick={() => goTo('https://tustreams.com/')}>
            <Container>
              <ProjectTitle >TUSTREAMS</ProjectTitle>
              <Subtitle>WIT EOOD</Subtitle>
              <Image>
                <img src={Tu} alt="project6" />
              </Image>
              <Description>the first digital distribution platform focused on Latin music. </Description>
              <Description>Working on the front-end side with technologies such as <span>React, NextJS,  React-Query</span></Description>
            </Container>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </SectionWrapper>
  );
};

export default Projects;
