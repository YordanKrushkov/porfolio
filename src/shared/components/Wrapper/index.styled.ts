import { mobile } from '@constants';
import styled from 'styled-components';

interface Props {
  theme: any
  secondary?: boolean
  hero?: boolean
};

export const Wrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  height: ${({ hero }) => hero && 450}px;
  padding: 20px 50px;
  box-sizing: border-box;
  background-color: ${({ theme, secondary }) => secondary ? theme.colors.backgroundColor2 : theme.colors.primaryColor};
  box-shadow: 0 0 7px 0.3px rgba(0,0,0,0.2);
  ${({ hero }) => hero && mobile({ padding: '20px', height: '350px' })};
  ${mobile({ padding: '20px' })};
`;
