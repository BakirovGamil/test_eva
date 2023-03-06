import { useEffect, useRef, useState } from 'react';
import useFetching from '../../hooks/useFetching';
import ErrorList from '../ErrorList/ErrorList';
import TextArea from '../UI/TextArea/TextArea';
import Button from '../UI/Button/Button';
import TextService from '../../services/TextService';
import Common from '../../common/Common';

import * as S from './style';
import TextList from '../TextList/TextList';

const languages = {
  auto: 'auto',
  ru: 'ru',
  en: 'en',
};

function App() {
  const [text, setText] = useState('');
  const [previousTexts, setPreviousTexts] = useState([]);

  const [language, setLanguage] = useState(languages.auto);
  const [highlightedLetterIndexes, setHighlightedLetterIndexes] = useState([]);
  const [errors, setErrors] = useState([]);

  const isFirstRequest = useRef(true);
  useEffect(() => {
    if(!text.slice()) {
      isFirstRequest.current = true;
    }
  }, [text]);

  const [isLoadingPrevious, fetchPreviousTexts, errorPreviousTexts] = useFetching(async () => {
    const response = await TextService.getPrevious();
    const {result, errorMessages} = response;

    if (errorMessages) {
      const arrayOfErrors = [];
      if(typeof errorMessages === 'string') {
        arrayOfErrors.push(errorMessages);
      } else {
        arrayOfErrors.push(...Object.values(errorMessages));
      }
      
      setErrors(arrayOfErrors);
    } else {
      setPreviousTexts(result.reverse());
    }
  });

  useEffect(() => {
    fetchPreviousTexts();
  }, []);

  const timerId = useRef(null);
  const autoCheckText = (currentText) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    if (currentText.slice().length < 15 || isFirstRequest.current) return;

    timerId.current = setTimeout(() => checkText(currentText), 2000);
  };

  const checkText = async (currentText, isSave = false) => {
    try {
      const response = await TextService.check(currentText, isSave);
      const { result, errorMessages } = response;

      if (errorMessages) {
        const arrayOfErrors = [];
        if(typeof errorMessages === 'string') {
          arrayOfErrors.push(errorMessages);
        } else {
          arrayOfErrors.push(...Object.values(errorMessages));
        }

        setErrors(arrayOfErrors);
      } else {
        const checkedText = result;
        const lang = checkedText.lang;
        setLanguage(lang);
        if (lang === languages.ru) {
          setHighlightedLetterIndexes(checkedText.enIndexes);
        } else {
          setHighlightedLetterIndexes(checkedText.ruIndexes);
        }

        setErrors([]);
      }
    } catch (e) {
      setErrors(['Something went wrong']);
      setHighlightedLetterIndexes([]);
      setLanguage(languages.auto);
    }
  };

  const changeText = (e) => {
    const newText = e.target.value;
    const changedIndexes = Common.getChangedIndexes(text, newText);
    const newHighlightedLetterIndexes = highlightedLetterIndexes.filter(
      (index) => {
        if (changedIndexes.includes(index)) {
          return false;
        }

        return true;
      }
    );

    setHighlightedLetterIndexes(newHighlightedLetterIndexes);
    setText(newText);
    setLanguage(languages.auto);

    autoCheckText(newText);
  };

  const onSubmitCheckForm = (e) => {
    e.preventDefault();
    isFirstRequest.current = false;
    checkText(text, true);
    fetchPreviousTexts();
  };

  const isEnabledButton = text.trim().length >= 15;

  return (
    <S.Main>
      <S.Container>
        <TextList title="Previous: " texts={previousTexts} isLoading={isLoadingPrevious}/>
        <ErrorList errors={errors} />
        <S.Form onSubmit={onSubmitCheckForm}>
          <S.Language>
            Language:
            <S.HighlightLanguage> {language}</S.HighlightLanguage>
          </S.Language>
          <TextArea
            value={text}
            onChange={changeText}
            placeholder="Type, paste text here..."
            highlightedIndexes={highlightedLetterIndexes}
          />
          <Button disabled={!isEnabledButton}>
            Check
            <span> {!isEnabledButton && '(minimum length 15)'} </span>
          </Button>
        </S.Form>
      </S.Container>
    </S.Main>
  );
}

export default App;
