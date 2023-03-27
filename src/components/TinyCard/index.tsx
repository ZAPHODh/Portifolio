import * as Styled from './styles';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';
import { Heading } from '../Heading';
export type TinyCardProps = {
  name?: string;
  disabled: boolean;
};

export const TinyCard = ({ name, disabled }: TinyCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (disabled) return;
    router.push(`/games/${name}`);
  };
  return (
    <Styled.Wrapper>
      <Heading as="h2">{name}</Heading>
      <Button
        onClick={handleClick}
        center={false}
        fontSize="25px"
        width={'90%'}
        disabled={disabled}
      >
        Jogar!
        {disabled ? (
          <VideogameAssetOffIcon fontSize="inherit" />
        ) : (
          <VideogameAssetIcon fontSize="inherit" />
        )}
      </Button>
    </Styled.Wrapper>
  );
};
