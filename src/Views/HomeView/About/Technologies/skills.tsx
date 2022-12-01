
import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaSass, FaVuejs } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiGit, SiRedux, SiNextdotjs, SiExpress, SiJest, SiStyledcomponents, SiCypress, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TechnologiesWrapper, Card, SubText } from './index.styled';

export const primarySkills = [
  { icon: <FaReact/>, text: 'React JS' },
  { icon: <SiJavascript/>, text: 'JavaScript' },
  { icon: <SiTypescript/>, text: 'TypeScript' },
  { icon: <FaNodeJs/>, text: 'Node JS' },
  { icon: <FaCss3Alt/>, text: 'CSS3' },
  { icon: <FaHtml5/>, text: 'HTML5' }
];

export const secondarySkills = [
  { icon: <SiGit/>, text: 'Git' },
  { icon: <SiRedux/>, text: 'Redux' },
  { icon: <FaReact/>, text: 'React Native' },
  { icon: <SiNextdotjs/>, text: 'Next JS' },
  { icon: <SiExpress/>, text: 'Еxpress JS' },
  { icon: <FaVuejs/>, text: 'Vue JS' },
  { icon: <SiJest/>, text: 'Jest' },
  { icon: <SiCypress/>, text: 'Cypress' },
  { icon: <SiStyledcomponents/>, text: 'Styled-Components' },
  { icon: <FaSass/>, text: 'SASS' },
  { icon: <SiPostgresql/>, text: 'Postgresql' },
  { icon: <SiMongodb/>, text: 'MongoDB' }
];

export const PrimarySkills: React.FC = () => {
  return (
    <TechnologiesWrapper>
      {primarySkills.map(x => <Card key={x.text}>{x.icon} <SubText>{x.text}</SubText></Card>)}
    </TechnologiesWrapper>
  );
};
export const SecondarySkills: React.FC = () => {
  return (
    <TechnologiesWrapper>
      {secondarySkills.map(x => <Card key={x.text}>{x.icon} <SubText>{x.text}</SubText></Card>)}
    </TechnologiesWrapper>
  );
};
