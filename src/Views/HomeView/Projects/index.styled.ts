import { mobile } from '@constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.div`
  width: 60%;
  min-height: 350px;
  margin: 0 auto;

  ${mobile({ minHeight: '250px' })}
  img{
    width: 100%;
    height: 100%;
    mix-blend-mode: lighten;
    object-fit: contain;
  }
`;
export const ProjectTitle = styled.h1`
  font-family: 'MontserratRegular';
  color: ${({ theme }) => theme.colors.accent};
  margin: 10px 0;
  
`;
export const Subtitle = styled.h5`
  font-family: 'MontserratExtraLight';
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 10px;

`;
export const Description = styled.p`
  font-family: 'MontserratExtraLight';
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 5px;
  width: 80%;
  ${mobile({ fontSize: '10px' })}

  &:first-of-type{
    margin-top: 30px;
  }
  span {
    color: ${({ theme }) => theme.colors.accent};
    font-family: 'MontserratSemiBold';
  }
`;
