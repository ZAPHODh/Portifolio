'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
    ${() => css`
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.2);
        color: white;
        padding: 5px;
        font-size: 15px;
    `}
`;
