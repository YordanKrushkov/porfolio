import { mobile } from '@constants';
import styled from 'styled-components';

export const WorkWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    padding: 5px 0;
`;

export const Download = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'MontserratExtraLight';
    color: ${({ theme }) => theme.colors.accent};
    p{
      padding: 0;
      font-size: 12px;
    };
    &:hover{
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
    }
    ${mobile({ position: 'absolute', top: '0' })}
`;

export const WorkTitle = styled.div`
    font-family: 'MontserratSemiBold';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    ${mobile({ fontSize: '12px' })}
`;

export const Company = styled.div`
  margin: 10px 0;
  font-family: 'MontserratExtraLight';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  ${mobile({ fontSize: '10px' })}
`;

export const Description = styled.div`
  width: 80%;
  font-family: 'MontserratExtraLight';
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  ${mobile({ fontSize: '8px' })}
`;

export const WorkInfoWrapper = styled.div`
  margin-left: 30px;
`;

export const Label = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 90px;
    width: 90px;
    height: 30px;
    padding:0 10px;
    font-family: 'MontserratExtraLight';
    font-size: 12px;
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.white};
    &::before{
      content: "";
      position: absolute;
      right: -15px;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 15px solid ${({ theme }) => theme.colors.card};
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
    }
    ${mobile({ fontSize: '10px', width: '60px', minWidth: '60px', padding: '0 5px' })}
`;

export const Line = styled.div`
  position: absolute;
  left: 5px;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white} ;
  box-sizing: content-box;
  &::before{
      content: "";
      position: absolute;
      top: 0;
      left: -7px;
      width: 15px;
      height: 15px;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 50%;
      box-shadow: 0 0 7px 1px  ${({ theme }) => theme.colors.accent};
    }
`;
