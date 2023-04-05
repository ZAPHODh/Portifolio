'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
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
