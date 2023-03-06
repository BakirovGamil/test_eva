import * as S from './style';

const DualRingLoader = ({ isLoading = true, size = 60, color = 'rgb(236, 236, 236)', duration = '1.2s' }) => {
  return isLoading ? (
    <S.Container width={size} height={size}>
      <S.Loader size={size} color={color} duration={duration}></S.Loader>
    </S.Container>
  ) : null;
};

export default DualRingLoader;
