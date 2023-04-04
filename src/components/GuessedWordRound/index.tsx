import { SetStateAction, useEffect, useState } from 'react';
import * as Styled from './styles';
import { GuessedWord } from '../GuessedWord';
import { v4 as uuid } from 'uuid';

export type GuessedWordRoundProps = {
  word: string[];
};
export type Correct = 'correct' | 'almost' | '';
export const GuessedWordRound = ({ word = [] }: GuessedWordRoundProps) => {
  const [victory, setVictory] = useState(false);
  const [lose, setLose] = useState(false);
  const [isAnimating, setIsAnimating] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );
  const [selectedWord] = useState(
    word[Math.floor(Math.random() * word.length)],
  );
  const [correct, setCorrect] = useState<Correct[][]>([[], [], [], [], []]);
  const [round, setRound] = useState(0);
  const [guessedWords, setGuessedWords] = useState<string[][]>([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);
  const splitedWord = selectedWord?.split('');

  const handleGuessWordChange = (
    index: number,
    newGuess: SetStateAction<string[]>,
  ) => {
    setGuessedWords((prevState) => {
      const newGuessedWords = [...prevState];
      newGuessedWords[index] =
        typeof newGuess === 'function' ? newGuess(prevState[index]) : newGuess;
      return newGuessedWords;
    });
  };
  const handleSubmit = () => {
    if (guessedWords[round].filter((value) => value === '').length !== 0) {
      return;
    }

    setIsAnimating((previousValue) => {
      const newValue = [...previousValue];
      newValue[round] = true;
      return newValue;
    });

    const newCorrectArray = splitedWord.map((char, i) => {
      if (char === guessedWords[round][i]) {
        return 'correct';
      } else if (splitedWord.includes(guessedWords[round][i])) {
        return 'almost';
      } else {
        return '';
      }
    });

    setCorrect((previous) => {
      const newArray = [...previous];
      newArray[round] = newCorrectArray;
      return newArray;
    });

    const isComplete = newCorrectArray.every((value) => value === 'correct');

    if (isComplete) {
      setVictory(true);
    }

    if (round === 4 && !isComplete) {
      setLose(true);
    }

    setRound((prevRound) => prevRound + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSubmit();
        setTimeoutId(
          setTimeout(() => {
            setIsAnimating([false, false, false, false, false]);
          }, 2000),
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [handleSubmit, timeoutId]);

  return (
    <Styled.Wrapper>
      {guessedWords.map((_, index) => (
        <GuessedWord
          word={selectedWord}
          disabled={index !== round}
          key={uuid()}
          guessedWords={guessedWords[index]}
          setGuessedWords={(newGuess) => handleGuessWordChange(index, newGuess)}
          isAnimating={isAnimating[index]}
          correct={correct[index]}
        />
      ))}
    </Styled.Wrapper>
  );
};
