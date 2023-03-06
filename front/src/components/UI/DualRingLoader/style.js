import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99999;
  transform: translate(-50%, -50%);
  display: inline-block;
  background-color: rgb(127, 126, 132);
  border-radius: 10%;
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
`;

export const Loader = styled.div`
  content: ' ';
  display: block;
  /* ratio: calc(64px / 80px) */
  width: 80%;
  height: 80%;
  /* ratio: calc(8px / 80px) */
  margin: 10%;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #000 transparent #000 transparent;
  animation-name: lds-dual-ring;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  border-width: ${({ size }) => size * 0.075 + 'px'};
  border-color: ${({ color }) => color + ' transparent'};
  animation-duration: ${({ duration }) => duration};

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
