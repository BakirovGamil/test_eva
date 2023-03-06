import styled from 'styled-components';
import crossIcon from '../../../assets/icons/cross-small-svgrepo-com.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  overflow-y: auto;

  visibility: hidden;
  ${({ isVisible }) =>
    isVisible &&
    `
  visibility: visible;
  `}

  display: flex;
`;

export const CloseButton = styled.button`
  border: none;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url(${crossIcon}) center/contain no-repeat;
  position: absolute;
  top: 5px;
  right: 12px;
  opacity: 0.9;
  cursor: pointer;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  margin: auto;
  cursor: pointer;
`;

export const Content = styled.div`
  cursor: auto;
  background-color: rgb(51, 51, 54);
  margin: 50px 0;
`;
