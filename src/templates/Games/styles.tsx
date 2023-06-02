'use client';

import styled, { css } from 'styled-components';
import { BannerContainer } from '../Project/styles';
export const Wrapper = styled.div`
    ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    >${BannerContainer}{
        height: 300px;
    }
    `}
`;

export const GameContent = styled.section`
    ${() => css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        flex: 1;
        @media (max-width:728px) {
            flex-direction: column;
            
        }
    `}
`;
