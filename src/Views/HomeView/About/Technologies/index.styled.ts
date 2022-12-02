import { mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto 40px;
`;

export const Title = styled.h1`
  font-family: 'MontserratExtraLight';
  font-size: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ${mobile({ fontSize: '16px' })}
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px 0;
  ${mobile({ gap: '10px', margin: '20px 0' })}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 200px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  ${mobile({ gap: '5px', width: '70px', height: '70px' })}

  svg{
    font-size: 80px;
  ${mobile({ fontSize: '24px' })}
  }
`;

export const SubText = styled.div`
  font-family: 'MontserratExtraLight';
  font-size: 24px;
  text-align: center;
  ${mobile({ fontSize: '10px' })}
`;
