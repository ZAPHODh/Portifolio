import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        color: #8b8b8b;
        overflow: hidden;
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    `}
`;
