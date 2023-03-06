import styled from 'styled-components';

export const Main = styled.main``;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container.width};
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Language = styled.p``;

export const HighlightLanguage = styled.span`
  text-indent: 1rem;
  color: red;
`;
