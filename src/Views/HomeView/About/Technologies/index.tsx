import React from 'react';
import { Wrapper, Title } from './index.styled';
import { PrimarySkills, SecondarySkills } from './skills';

const Technologies: React.FC = () => {
  return (
    <Wrapper>
      <Title>My Skills</Title>
      <PrimarySkills/>
      <Title>Secondary</Title>
      <SecondarySkills/>
    </Wrapper>

  );
};
export default Technologies;
