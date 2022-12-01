import styled from 'styled-components';

export const Wrapper = styled.div` 
    position: absolute;
    z-index: 999;
    top: 30px;
    width: 100%;
`;

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    gap: 20px;
    a{
      font-family: 'MontserratExtraLight';
      font-size: 14px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryColor2};
    }
`;
