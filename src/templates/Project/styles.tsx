'use client';

import { Title } from '../../components/Heading/styles';
import styled, { css } from 'styled-components';
export const Wrapper = styled.main`
    ${() => css`
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        > ${Title} {
            padding: 50px;
        }
    `}
`;

export const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: rgba(0, 0, 0, 0.08); */
`;

export const BannerContainer = styled.div`
    ${() => css`
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(#000000, transparent);
    `}
`;
