import React from 'react';
import { Wrapper, Image, TextWrapper, Line, Text, Possition, Person, Name } from './index.styled';
import testemonials from './testemonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import { Title } from '../About/index.styled';
import { SectionWrapper } from '@components';
const Testemonial: React.FC = () => {
  const swiperBreakpoints = {
    800: {
      slidesPerView: 1
    },
    1400: {
      slidesPerView: 1.4
    }

  };
  return (
    <SectionWrapper secondary>
      <Title>Testemonials</Title>
      <Swiper
        modules={[Mousewheel, Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        spaceBetween={10}
        mousewheel={{ forceToAxis: true }}
        breakpoints={swiperBreakpoints}
        grabCursor
        speed={1000}
        autoplay={{ disableOnInteraction: false, pauseOnMouseEnter: true }}
        style={{ margin: '30px 0' }}
      >
        {testemonials.map(x =>
          <SwiperSlide key={x.author} >
            <Wrapper testemonial>
              <TextWrapper>
                <Line/>
                <Text>
                  {x?.text}
                  <Person>
                    <Name>{x?.author}</Name>
                    <Possition><Line width={30}/>
                      {x?.possition}
                    </Possition>
                  </Person>
                </Text>
              </TextWrapper>
              <Image>
                <img src={x?.img}/>
              </Image>
            </Wrapper>
          </SwiperSlide>
        )}

      </Swiper>
    </SectionWrapper>

  );
};
export default Testemonial;
