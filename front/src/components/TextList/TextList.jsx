import { useState } from 'react';
import DualRingLoader from '../UI/DualRingLoader/DualRingLoader';
import Modal from '../UI/Modal/Modal';

import * as S from './style';

const TextList = ({ title, texts = [], isLoading = false }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectedTextObject, setSelectedTextObject] = useState({});

  const copyContent = () => {
    const copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = selectedTextObject.text;
 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
  };

  const onClick = (textObject) => {
    setSelectedTextObject(textObject);
    setIsVisibleModal(true);
  };

  return (
    <S.Container>
      <Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
        <S.FullTextContainer>
          <S.CopyButton onClick={copyContent} />
          <S.FullTextTitle>Full text</S.FullTextTitle>
          <S.FullText>{selectedTextObject.text}</S.FullText>
        </S.FullTextContainer>
      </Modal>
      <S.Title>{title}</S.Title>
      <S.List>
        {texts.map((textObject) => (
          <S.ListItem key={textObject.id}>
            <S.Text title="click to open" onClick={() => onClick(textObject)}>
              {textObject.text}
            </S.Text>
          </S.ListItem>
        ))}
        {isLoading && <DualRingLoader />}

        {Boolean(!texts.length) && !isLoading && <S.Empty>Empty</S.Empty>}
      </S.List>
    </S.Container>
  );
};

export default TextList;
