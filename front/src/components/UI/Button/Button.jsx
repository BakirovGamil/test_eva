import * as S from './style';

const Button = ({ children, onClick, disabled }) => {
  return <S.Button onClick={onClick} disabled={disabled}>{children}</S.Button>;
};

export default Button;
