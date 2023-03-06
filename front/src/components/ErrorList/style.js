import styled from 'styled-components';

export const Container = styled.ul`
  background-color: ${({theme}) => theme.colors.error};
  padding: 10px;
  display: inline-block;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
`;
