'use client';

import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.section`
    ${() => css`
        background-color: rgba(255, 255, 255, 0.05);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 50px 0;
        > ${Title} {
            padding: 20px;
            color: white;
        }
    `}
`;
export const CardContainer = styled.div`
    ${() => css`
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        @media (max-width: 728px) {
            flex-direction: column;
        }
    `}
`;
