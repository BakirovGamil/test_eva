import React, { useCallback, useEffect } from 'react';
import { disableDocumentScroll, enableDocumentScroll } from '../../../common/scroll';

import * as S from './style';

const Modal = React.forwardRef(({ isVisible, setIsVisible, children }, ref) => {
  const handleKeyUp = useCallback(
    (e) => {
      if (e.code === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    },
    [isVisible, setIsVisible]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    if (isVisible) {
      disableDocumentScroll();
    } else {
      enableDocumentScroll();
    }
  }, [isVisible]);

  const hideModal = (e) => {
    const leftMouse = 0;

    if (e.button === leftMouse) {
      setIsVisible(false);
    }
  };

  return (
    <S.Overlay isVisible={isVisible}>
      <S.Wrapper ref={ref} onMouseDown={hideModal}>
        <S.CloseButton title="Закрыть" />
        <S.Content onMouseDown={(e) => e.stopPropagation()}>
          {children}
        </S.Content>
      </S.Wrapper>
    </S.Overlay>
  );
});

export default Modal;
