'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media (max-width:728px){
        justify-content:flex-start;
    }
    `}
`;

export const GuessedContainer = styled.div<{ render: boolean }>`
     ${({ render }) => css`
    display:${render ? 'flex' : 'none'};
    align-items:center;
    justify-content:center;
    flex-direction:column;
    `}
`;
