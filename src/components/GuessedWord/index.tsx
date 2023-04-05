import { useRef } from 'react';
import { GuessedLetter, InputRef } from '../GuessedLetter';
import { v4 as uuid } from 'uuid';
import * as Styled from './styles';
import { Correct } from '../GuessedWordRound';

export type GuessedWordProps = {
  word: string;
  disabled: boolean;
  guessedWords: string[];
  setGuessedWords: React.Dispatch<React.SetStateAction<string[]>>;
  isAnimating: boolean;
  correct: Correct[];
};

export const GuessedWord = ({
  word = 'teste',
  disabled,
  guessedWords,
  setGuessedWords,
  isAnimating,
  correct,
}: GuessedWordProps) => {
  const inputRefs = useRef<Array<InputRef>>([]);
  const splitedWord = word?.split('');

  const handleOnChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value.toUpperCase();
    if (!isNaN(Number(value))) return;
    setGuessedWords((previousGuess) => {
      const updatedGuess = [...previousGuess];
      updatedGuess[index] = value;
      return updatedGuess;
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.key;
    setGuessedWords((guessedWord) =>
      guessedWord.map((letter, i) => {
        if (letter !== '') {
          return value;
        }
        return letter;
      }),
    );
    if (value === 'Backspace' || value === 'Delete' || e.keyCode === 8) {
      setGuessedWords((guessedWord) =>
        guessedWord.map((letter, i) => {
          if (i === index) {
            return '';
          }
          return letter;
        }),
      );
      return;
    }

    if (index === 4) return;
    if (!isNaN(Number(value))) return;
    setTimeout(() => {
      inputRefs.current[index + 1]?.focus();
    }, 50);
  };

  return (
    <Styled.Wrapper>
      {splitedWord?.map((letter, index) => (
        <GuessedLetter
          key={uuid()}
          value={guessedWords[index]}
          onChange={(e) => handleOnChange(index, e)}
          disabled={disabled}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          isAnimating={isAnimating}
          bg={correct[index]}
        />
      ))}
    </Styled.Wrapper>
  );
};
GuessedWord.displayName = 'GuessedWord';
