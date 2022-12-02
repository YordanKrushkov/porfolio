import { desktop, mobile } from '@constants';
import styled from 'styled-components';
export const ImageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    img{
      height: 100%;
      mix-blend-mode: lighten;
      filter: contrast(100%);
      transform: scaleX(-1);
    };
`;

export const BussinessCard = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    transform: translateY(40%);
    ${desktop({ top: '10%', right: '10%' })}
    ${mobile({ top: '30%' })}
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`;

export const PreTitle = styled.div`
    padding-bottom: 4px;
    font-family: 'MontserratLight';
    font-size: 42px;
    color: ${({ theme }) => theme.colors.white};
    ${desktop({ fontSize: '30px' })}
    ${mobile({ fontSize: '12px' })}
`;

export const Name = styled.div`
    font-family: 'MontserratBold';
    font-size: 62px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.accent};
    ${desktop({ fontSize: '52px' })}
    ${mobile({ fontSize: '18px' })}

`;

export const JobTitle = styled(PreTitle)`
    font-family: 'MontserratExtraLight';
    font-size: 36px;
    ${desktop({ fontSize: '30px' })}
    ${mobile({ fontSize: '12px' })}

`;

export const Button = styled.div`
    width: fit-content;
    margin-top: 40px;
    padding: 10px 20px;
    font-family: 'MontserratExtraLight' ;
    font-size: 42px;
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
    ${desktop({ fontSize: '30px', marginTop: '30px' })}
    ${mobile({ fontSize: '14px', marginTop: '20px', padding: '5px 10px' })}

    &:hover{
      color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
`;

export const SocialMedia = styled.div`
    position: absolute;
    bottom: 5px;
    left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: fit-content;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    svg {
      cursor: pointer;
    }
`;

export const Line = styled.div`
    height: 40px;
    width: 2px;
    margin-bottom: 5px;
    background-color: ${({ theme }) => theme.colors.white};
`;
