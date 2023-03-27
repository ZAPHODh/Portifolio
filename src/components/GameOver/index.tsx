import { Button } from '../Button';
import * as Styled from './styles';

export type GameOverProps = {
  score: number;
};

export const GameOver = ({ score }: GameOverProps) => {
  return (
    <Styled.Wrapper>
      <p>Game Over</p>
      <p>Sua pontuação foi de {score}.</p>
      <p>Você comeu {score / 10} pedaços.</p>
      <Button onClick={() => window.location.reload()} rounded={false}>
        Jogar novamente!
      </Button>
    </Styled.Wrapper>
  );
};
