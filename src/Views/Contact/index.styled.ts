import { mobile } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div<{ justify: string }>`
    display: flex;
    align-items: flex-start;
    justify-content: ${({ justify }) => justify};
    gap: 10px;
    box-sizing: border-box;
    ${({ justify }) => justify !== 'flex-start' && mobile({ flexDirection: 'column', alignItems: 'center' })}
`;

export const Description = styled.div`
  width: 80%;
  font-family: 'MontserratExtraLight';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  ${mobile({ fontSize: '8px' })}
`;
export const Form = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  ${mobile({ width: '80%', marginTop: '20px' })};

  input, textarea, button{
    font-family: 'MontserratExtraLight';
    font-size: 24px;
    background-color: ${({ theme }) => theme.colors.primaryColor2};
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
    &::placeholder{
    color: ${({ theme }) => theme.colors.card};
   }
  ${mobile({ padding: '10px', fontSize: '10px' })};

  }

`;
export const Input = styled.input`
    width: 100%;
    border: none;
    min-height: 50px;
`;

export const TextArea = styled.textarea`
   min-height: 180px;
   resize: none;
  ${mobile({ minHeight: '100px' })};
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
   width: 40%;
   justify-self: center;
   margin: 20px auto;
   ${mobile({ margin: '10px', width: 'auto' })};

   p{
    text-align: center;
    font-family: 'MontserratExtraLight';
    font-style: italic;
    font-size: 36px;
   ${mobile({ fontSize: 'inherit' })};
   }
`;
export const Social = styled.div`
   color: ${({ theme }) => theme.colors.accent};
   display: flex;
   align-self: center;
   justify-content: center;
   justify-self: center;
   gap: 15px;
   margin-left: 20px;
   ${mobile({ gap: '10px' })};
   svg{
      font-size: 46px;
   ${mobile({ fontSize: '28px' })};
      &:hover{
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
    }
   }

`;
