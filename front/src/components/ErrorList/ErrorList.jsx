import * as S from './style';

const ErrorList = ({ errors }) => {
  return errors.length ? (
    <S.Container>
      {errors.map((e) => (
        <S.Item key={e}>{e}</S.Item>
      ))}
    </S.Container>
  ) : null;
};

export default ErrorList;
