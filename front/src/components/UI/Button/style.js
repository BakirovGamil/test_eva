import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  font-size: 1rem;
  text-align: center;
  padding: 10px 15px;
  background-color: #1b1a20;
  transition: background-color 0.2s ease 0s;
  cursor: pointer;
  color: #fff;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }

  &:enabled {
    &:hover {
      background-color: rgb(234, 191, 0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:hover {
      background-color: #1b1a20;
    }
  }
`;
