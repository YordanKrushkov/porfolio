import { mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 6px;
  box-sizing: border-box;
  ${mobile({ padding: '10px' })}

`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Line = styled.div<{ width?: number }>`
  width: ${({ width }) => width ?? 40}px;
  height: 1px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const Text = styled.div`
  font-family: "MontserratExtraLight";
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  font-style: italic;
  ${mobile({ width: '90%' })}

`;

export const Person = styled.div`
  margin-top: 10px;
`;

export const Name = styled.div`
  font-family: "MontserratBold";
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Possition = styled.div`
  display: flex;
  margin-top: 5px;
  font-family: "MontserratExtraLight";
  font-size: 8px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.div`
  min-width: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  ${mobile({ minWidth: '60px', width: '60px', height: '60px' })}

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;
