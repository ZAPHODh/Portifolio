import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        color: #8b8b8b;
        overflow: hidden;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    `}
`;
