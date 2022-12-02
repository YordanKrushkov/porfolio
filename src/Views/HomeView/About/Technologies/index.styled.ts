import { desktop, mobile } from '@constants';
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
  ${desktop({ fontSize: '28px' })}
  ${mobile({ fontSize: '16px' })}
`;

export const TechnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px auto;
  justify-content: center;
  white-space: wrap;
  flex-wrap: wrap;
  ${desktop({ gap: '20px', margin: '30px auto', width: '70%', gridTemplateColumns: 'repeat(6, 1fr)' })}
  ${mobile({ gap: '10px', margin: '20px auto', gridTemplateColumns: 'repeat(3, 1fr)' })}
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
  ${desktop({ gap: '7px', width: '120px', height: '120px' })}
  ${mobile({ gap: '7px', width: '100px', height: '100px' })}

  svg{
  font-size: 80px;
  ${desktop({ fontSize: '36px' })}
  ${mobile({ fontSize: '32px' })}
  }
`;

export const SubText = styled.div`
  font-family: 'MontserratExtraLight';
  font-size: 24px;
  text-align: center;
  ${desktop({ fontSize: '18px' })}
  ${mobile({ fontSize: '12px' })}
`;
