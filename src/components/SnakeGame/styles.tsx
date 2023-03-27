import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';

export const Wrapper = styled.div`
    ${() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background-color: #000000;
    `}
`;

export const GameCanvas = styled.canvas`
    border: 1px solid #8c8c8c;
    border-radius: 10px;
    margin-bottom: 50px;
    &:hover {
        border: 1px solid white;
    }
    &:focus {
        border: 1px solid white;
    }
`;
export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  >${Button}{
    width: 50px;
    height: 50px;
    color: black;
    background-color: white;
    margin: 10px;
  }
`;

export const Mode = styled.div`
  margin: 10px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
`;
