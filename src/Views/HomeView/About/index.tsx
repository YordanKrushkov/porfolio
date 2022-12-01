import React from 'react';
import { Wrapper, Title, Description, Line, Text } from './index.styled';
import Technologies from './Technologies';

const About: React.FC = () => {
  return (
    <Wrapper>
      <Title>About</Title>
      <Description>
        <Line/>
        <Text>Passionate developer at the start of his career with experience in the web world and especially building web applications from scratch and
        migrating legacy projects to the world of new technologies. I enjoy the challenges and being engaged in projects requiring extending my existing
        knowledge set as I am constantly learning new languages and techniques
        </Text>
      </Description>
      <Technologies/>
    </Wrapper>
  );
};

export default About;
