import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type GameOverProps = {
  score: number;
  mode: number | undefined;
};

export const GameOver = ({ score, mode }: GameOverProps) => {
  const [difficulty, setDifficulty] = useState<string>();
  useEffect(() => {
    if (!mode) return;

    if (mode === 90) {
      setDifficulty('Normal');
      return;
    }

    if (mode === 120) {
      setDifficulty('Fácil');
      return;
    }

    if (mode === 50) {
      setDifficulty('Difícil');
      return;
    }
  }, []);
  return (
    <Styled.Wrapper>
      <Heading>Game Over</Heading>
      <p>Sua pontuação foi de {score}.</p>
      <p>Você comeu {score / 10} pedaços</p>
      <p>Dificuldade: {difficulty}</p>
      <Button onClick={() => window.location.reload()} rounded={false}>
        Jogar novamente!
      </Button>
    </Styled.Wrapper>
  );
};
