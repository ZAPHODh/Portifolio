'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    `}
`;

export const GameContent = styled.section`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width:728px) {
            flex-direction: column;
            
        }
    `}
`;
