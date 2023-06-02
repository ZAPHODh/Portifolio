'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ bg?: boolean }>`
    ${({ bg }) => css`
    color: #8b8b8b;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    font-size: 10px;
    ${bg ? 'background-color :#0e0e0e' : ''}
    `}
`;
