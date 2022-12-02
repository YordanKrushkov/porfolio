import { mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div` 
    position: absolute;
    z-index: 999;
    top: 60px;
    width: 100%;
    ${mobile({ top: '30px' })}
`;

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    gap: 40px;
    ${mobile({ gap: '20px' })}
    a{
      font-family: 'MontserratExtraLight';
      font-size: 36px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryColor2};
      ${mobile({ fontSize: '14px' })}
    }
`;
