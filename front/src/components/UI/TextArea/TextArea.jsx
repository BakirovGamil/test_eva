import { useEffect, useMemo, useRef } from 'react';
import Common from '../../../common/Common';

import * as S from './style';

const TextArea = ({ value, onChange, highlightedIndexes, placeholder }) => {
  const textareaRef = useRef(null);
  const highlightContainerRef = useRef(null);
  const highlightBodyRef = useRef(null);

  const resizeHighlightBody = () => {
    const scrollHeightTextarea = textareaRef.current.scrollHeight;
    const offsetHeightTextarea = textareaRef.current.offsetHeight;
    if (scrollHeightTextarea > offsetHeightTextarea) {
      highlightBodyRef.current.style.height =
      scrollHeightTextarea + 'px';
    } else {
      highlightBodyRef.current.style.height = '100%';
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    const resizeObserverTextarea = new ResizeObserver(resizeHighlightBody);
    resizeObserverTextarea.observe(textarea);

    return () => resizeObserverTextarea.unobserve(textarea);
  }, []);

  useEffect(() => {
    resizeHighlightBody();
  }, [value]);

  const onScroll = () => {
    highlightContainerRef.current.scroll(0, textareaRef.current.scrollTop);
  };

  const valueWithHighlight = useMemo(() => {
    if (highlightedIndexes?.length === 0) return value;

    const joinedSiblingIndexes = Common.joinSiblingIndexes(highlightedIndexes);
    const preparedValue = [];
    let startIndexValue = 0;
    let key = 0;
    joinedSiblingIndexes.forEach((siblingIndexes) => {
      const firstIndex = siblingIndexes[0];
      const lastIndex = siblingIndexes[siblingIndexes.length - 1];

      if (startIndexValue !== firstIndex) {
        preparedValue.push(
          <S.NoneHighligth key={key++}>
            {value.slice(startIndexValue, firstIndex)}
          </S.NoneHighligth>
        );
      }

      preparedValue.push(
        <S.Highlight key={key++}>
          {value.slice(firstIndex, lastIndex + 1)}
        </S.Highlight>
      );

      startIndexValue = lastIndex + 1;
    });

    // Оставшаяся часть текста
    if (startIndexValue < value.length) {
      preparedValue.push(
        <S.NoneHighligth key={key++}>{value.slice(startIndexValue)}</S.NoneHighligth>
      );
    }

    return preparedValue;
  }, [value, highlightedIndexes]);

  return (
    <S.Container>
      <S.Textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        spellCheck={false}
        placeholder={placeholder}
        onScroll={onScroll}
      />
      <S.HighlightContainer ref={highlightContainerRef}>
        <S.HighlightBody ref={highlightBodyRef}>
          {valueWithHighlight}
        </S.HighlightBody>
      </S.HighlightContainer>
    </S.Container>
  );
};

export default TextArea;
