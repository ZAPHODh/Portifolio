import { Button } from '../Button';
import { Description } from '../Description';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { FaceSadTear } from '@styled-icons/fa-solid/FaceSadTear';
import { HappyBeaming } from '@styled-icons/boxicons-solid/HappyBeaming';
export type LoseWordleProps = {
  word: string;
  win: boolean;
};

export const LoseWordle = ({ word, win }: LoseWordleProps) => {
  return (
    <Styled.Wrapper>
      <Heading> {win ? `Parabéns` : `Você perdeu`}</Heading>
      {win ? (
        <HappyBeaming width={'50px'} color="#3cb043" />
      ) : (
        <FaceSadTear width={'50px'} color="#d0312d" />
      )}
      <Description>
        {win ? `Você acertou a palavra` : `Palavra Correta`}
      </Description>
      <Heading as="h2">{word?.toUpperCase()}</Heading>
      <Button onClick={() => window.location.reload()} reverse={true}>
        Jogar novamente
      </Button>
    </Styled.Wrapper>
  );
};
