import styled from 'styled-components';

export const TestemonialWrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 0 0 7px 0.3px rgba(0,0,0,0.2);
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 6px;
  box-sizing: border-box;
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
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;
