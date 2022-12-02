import { desktop, mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 6px;
  box-sizing: border-box;
  width: 70%;
  margin: 0 auto;
  ${desktop({ padding: '30px', minHeight: '350px', minWidth: '900px' })};
  ${mobile({ padding: '10px', width: 'auto', minWidth: '90%', minHeight: 'auto' })};
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Line = styled.div<{ width?: number }>`
  width: ${({ width }) => width ?? 60}px;
  height: 1px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  ${desktop({ margin: '8px' })};
  ${mobile({ margin: '5px' })};
  ${({ width }) => width ? mobile({ width: width - 20 }) : mobile({ width: '40px' })};
`;

export const Text = styled.div`
  font-family: "MontserratExtraLight";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  width: 90%;
  font-style: italic;
  ${desktop({ fontSize: '18px' })};
  ${mobile({ width: '90%', fontSize: '10px' })}

`;

export const Person = styled.div`
  margin-top: 10px;
  ${desktop({ marginTop: '20px' })};

`;

export const Name = styled.div`
  font-family: "MontserratBold";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  ${desktop({ fontSize: '20px' })};
  ${mobile({ fontSize: '10px' })};
`;

export const Possition = styled.div`
  display: flex;
  margin-top: 5px;
  font-family: "MontserratExtraLight";
  font-size: 20px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
  ${desktop({ fontSize: '18px' })};
  ${mobile({ fontSize: '8px' })};
`;

export const Image = styled.div`
  min-width: 300px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  ${desktop({ minWidth: '200px', width: '200px', height: '200px' })};
  ${mobile({ minWidth: '60px', width: '60px', height: '60px' })};

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;
