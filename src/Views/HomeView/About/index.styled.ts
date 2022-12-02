import { desktop, mobile } from '@constants';
import styled from 'styled-components';

export const Title = styled.div`
  margin: 10px 0;
  font-family: 'MontserratSemiBold';
  font-size: 56px;
  text-align: start;
  color: ${({ theme }) => theme.colors.white};
  ${desktop({ fontSize: '42px' })}
  ${mobile({ fontSize: '20px' })}
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 40px;
  box-sizing: border-box;

`;

export const Line = styled.div`
  width: 90px;
  height: 2px;
  margin: 12px 0;
  background-color: ${({ theme }) => theme.colors.accent};
  ${mobile({ width: '40px', margin: '6px 0' })}
`;

export const Text = styled.div`
  width: 80%;
  padding: 0;
  font-family: 'MontserratExtraLight';
  font-size: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  ${desktop({ fontSize: '18px', width: '100%' })}
  ${mobile({ fontSize: '10px' })}
`;
