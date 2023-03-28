import { useRouter } from 'next/navigation';
import * as Styled from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export type BackToProps = {
  title?: string;
};

export const BackTo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <Styled.Wrapper onClick={handleClick}>
      <ArrowBackIosIcon fontSize="inherit" />
    </Styled.Wrapper>
  );
};
