import { ChangeEventHandler, forwardRef, KeyboardEventHandler } from 'react';
import * as Styled from './styles';

export type InputRef = HTMLInputElement | null;

export type GuessedLetterProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  bg?: '' | 'almost' | 'correct';
  isAnimating: boolean;
};

export const GuessedLetter = forwardRef<InputRef, GuessedLetterProps>(
  (
    { value, onChange, disabled, bg = '', onKeyDown, isAnimating = true },
    ref,
  ) => {
    return (
      <Styled.Wrapper
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={1}
        ref={ref}
        onKeyDown={onKeyDown}
        bg={bg}
        isAnimating={isAnimating}
      />
    );
  },
);

GuessedLetter.displayName = 'GuessedLetter';
