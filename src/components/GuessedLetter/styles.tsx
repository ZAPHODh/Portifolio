'use client';

import styled, { css, keyframes } from 'styled-components';
const Spin = keyframes`
    from{
        transform: rotateY(0deg);
    }
    to{
        transform: rotateY(360deg);
    }
`;

export const Wrapper = styled.input<{
  bg: string | undefined;
  isAnimating: boolean;
}>`
  width: 50px;
  height: 50px;
  
  border: ${({ bg }) => (bg === '' ? '1px solid #8b8b8b' : '1px solid black')};
  background-color: ${({ bg }) =>
    bg === 'almost' ? '#eedc83' : bg === 'correct' ? '#5aab61' : 'transparent'};
  font-size: 25px;
  text-align: center;
  color: ${({ bg }) => (bg == 'correct' ? 'white' : '#8b8b8b')};
  margin: 5px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid white;
  }
  ${({ isAnimating }) =>
    isAnimating ? css`animation: ${Spin} 1s linear ;` : ''}
`;
