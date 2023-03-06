import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const fontStyles = css`
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-height: 1.3rem;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const textAreaStyles = css`
  appearance: none;
  background-image: none;
  box-shadow: none;
  border-radius: 0;
  outline: none;
  display: inline-block;
  width: 100%;
  padding: 8px 10px;
  border: 3px solid #ccc;
  transition: border 0.3s;
  resize: vertical;
  overflow: auto;
  resize: vertical;
`;

export const Textarea = styled.textarea`
  ${textAreaStyles};
  ${fontStyles};
  min-height: 100px;
  height: 200px;
  background-color: transparent;

  &:focus {
    border: 3px solid #555;
  }
`;

export const HighlightContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 4px;
  left: 0;
  background-color: white;
  ${textAreaStyles};
  ${fontStyles};
`;

export const HighlightBody = styled.pre`
  overflow: hidden;
  ${fontStyles}
`;

// не менять стили букв
export const Highlight = styled.span`
  background-color: ${({ theme }) => theme.colors.error};
  color:  ${({ theme }) => theme.colors.error};
  border-bottom: 1px dotted red;
`;

export const NoneHighligth = styled.span`
  opacity: 0;
`;
