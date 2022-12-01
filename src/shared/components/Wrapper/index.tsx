import React from 'react';
import { Wrapper } from './index.styled';

interface Props {
  secondary?: boolean
  children?: JSX.Element | JSX.Element[]
  hero?: boolean
};
export const SectionWrapper: React.FC<Props> = ({ secondary = false, hero = false, children }) => {
  return (
    <Wrapper secondary={secondary} hero={hero}>
      {children}
    </Wrapper>
  );
};
