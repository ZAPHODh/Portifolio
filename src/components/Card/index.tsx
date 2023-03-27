import { Button } from '../Button';
import { useRouter } from 'next/navigation';
import { Description } from '../Description';
import { Heading } from '../Heading';
import { Thumbnail } from '../Thumbnail';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import * as Styled from './styles';
export type CompletePage = {
  title: string;
  description: string;
  img: string;
};
export type CardProps = {
  title: string;
  description: string;
  url: string;
  completePage: CompletePage[];
};

export const Card = ({ title, url, description, completePage }: CardProps) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(
      `/projects/${title}?title=${title}&completePage=${JSON.stringify(
        completePage,
      )}`,
    );
  };
  return (
    <Styled.Wrapper>
      <Heading as="h2">{title}</Heading>
      <Thumbnail src={url} alt={`${title}-thumb`}></Thumbnail>
      <Description father={title} padding="10px" maxWidth="82%" maxChars={400}>
        {description}
      </Description>
      <Styled.ButtonContainer>
        <Button
          onClick={handleButtonClick}
          borderColor="#2097F7"
          center={false}
        >
          Saber mais
          <ReadMoreIcon fontSize="inherit" />
        </Button>
      </Styled.ButtonContainer>
    </Styled.Wrapper>
  );
};
