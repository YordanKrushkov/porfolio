import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    height: 450px;
    width: 100%;
    background: ${({ theme }) => theme.colors.primaryColor};
    box-shadow: 0 0 7px 0.3px rgba(0,0,0,0.2);
`;

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
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`;

export const PreTitle = styled.div`
    padding-bottom: 4px;
    font-family: 'MontserratLight';
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Name = styled.div`
    font-family: 'MontserratBold';
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.accent};
`;

export const JobTitle = styled(PreTitle)`
    font-family: 'MontserratExtraLight';
    font-size: 14px;
`;

export const Button = styled.div`
    width: fit-content;
    margin-top: 20px;
    padding: 5px 10px;
    font-family: 'MontserratExtraLight' ;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;

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
