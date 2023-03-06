import styled from 'styled-components';
import copyIcon from '../../assets/icons/copy-course-svgrepo-com.svg';

export const Container = styled.div``;

export const List = styled.ul`
  list-style: none;
  background-color: white;
  height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: relative;
`;

export const ListItem = styled.li`
  position: relative;
  padding: 10px 0;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    left: 0;
    top: 100%;
    transform: translateY(-50%);
  }
`;

export const Title = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  cursor: pointer;
  overflow: hidden;
  height: 40px;
  position: relative;

  &::after {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.2), #fff);
    content: '';
    height: 22px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10em;
  }
`;

export const FullText = styled.p`
`;

export const FullTextTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

export const FullTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: url(${copyIcon}) center/50% no-repeat;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border: 1px solid #ccc;

  &:active {
    background-color: #cfc;
  }
`;

export const Empty = styled.div`
  font-size: 1.1rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
