import { mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div<{ justify: string }>`
    display: flex;
    align-items: flex-start;
    justify-content: ${({ justify }) => justify};
    gap: 10px;
    box-sizing: border-box;

    ${({ justify }) => justify === 'center' && mobile({ flexDirection: 'column', alignItems: 'center' })}
`;

export const Description = styled.div`
  width: 80%;
  font-family: 'MontserratExtraLight';
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};

  ${mobile({ fontSize: '8px' })}
`;
export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  ${mobile({ width: '80%' })};

  input, textarea, button{
    font-family: 'MontserratExtraLight';
    font-size: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor2};
    padding: 5px;
    outline: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
    &::placeholder{
    color: ${({ theme }) => theme.colors.card};
   }
  ${mobile({ padding: '10px' })};

  }

`;
export const Input = styled.input`
    width: 100%;
    border: none;
`;

export const TextArea = styled.textarea`
   min-height: 100px;
   resize: none;
`;

export const Button = styled.button`
   background-color: transparent !important;
   border-color: ${({ theme }) => theme.colors.accent};
   color: ${({ theme }) => theme.colors.accent};
   width: 20%;
   align-self: flex-end;
   &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};

   }
`;
export const SocialWrapper = styled.div`
   color: ${({ theme }) => theme.colors.accent};
    display: flex;
    flex-direction: column;
   justify-content: center;
   justify-self: center;
   margin: 20px 0 0 20px;
   ${mobile({ margin: '10px' })};

   p{
    text-align: center;
    font-family: 'MontserratExtraLight';
    font-style: italic;
   }
`;
export const Social = styled.div`
   color: ${({ theme }) => theme.colors.accent};
    display: flex;
   align-self: center;
   justify-content: center;
   justify-self: center;
   gap: 10px;
   font-size: 28px;
   margin-left: 20px;
   svg{
      &:hover{
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
    }
   }

`;
