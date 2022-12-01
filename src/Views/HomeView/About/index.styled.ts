import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.colors.backgroundColor2};
  box-shadow: 0 0 7px 0.3px rgba(0,0,0,0.2);
`;

export const Title = styled.div`
  margin: 10px 0;
  font-family: 'MontserratSemiBold';
  font-size: 20px;
  text-align: start;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

export const Line = styled.div`
  width: 40px;
  height: 2px;
  margin: 6px 0;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const Text = styled.div`
  width: 80%;
  padding: 0;
  font-family: 'MontserratExtraLight';
  font-size: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
`;
