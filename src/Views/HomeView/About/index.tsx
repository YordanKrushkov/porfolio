import { SectionWrapper } from '@components';
import React, { useEffect, useRef } from 'react';
import { Title, Description, Line, Text } from './index.styled';
import Technologies from './Technologies';

const About: React.FC = () => {
  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      (formRef.current as HTMLFormElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <SectionWrapper secondary >
      <Title ref={formRef}>About</Title>
      <Description>
        <Line/>
        <Text>A budding developer with a passion for both technology and the arts, I bring a unique blend of creativity and technical
        acumen to my work. With a master&apos;s degree in Acting complementing my technical skills, I excel in not only building web applications
        from the ground up but also in the art of migrating legacy projects to embrace cutting-edge technologies.
My career journey is characterized by a love for challenges, as I thrive in projects that demand extending my existing knowledge base.
Continuously learning new programming languages and techniques parallels my artistic pursuits, where every project is an opportunity for growth and self-expression.
        </Text>
      </Description>
      <Technologies/>
    </SectionWrapper>
  );
};

export default About;
