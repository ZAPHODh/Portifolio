'use client';

import styled, { css } from 'styled-components';
import { BannerContainer } from '../Project/styles';
export const Wrapper = styled.div`
    ${() => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    >${BannerContainer}{
        height: 400px;
    }
    `}
`;

export const GameContent = styled.section`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        @media (max-width:728px) {
            flex-direction: column;
            
        }
    `}
`;
