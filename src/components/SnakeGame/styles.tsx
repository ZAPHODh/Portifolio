import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: #000000;
    `}
`;

export const GameCanvas = styled.canvas`
    border: 1px solid #8c8c8c;
    border-radius: 10px;
    &:hover {
        border: 1px solid white;
    }
    &:focus {
        border: 1px solid white;
    }
`;
