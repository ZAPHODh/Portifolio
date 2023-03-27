'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        position: relative;
        width: 100%;
        height: 100%;
        padding: 5px;
        &::before {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            width: 380px;
            height: 260px;
            margin-left: -300px;
            @media (max-width: 786px) {
                width: 280px;
                height: 160px;
                margin-left: -350px;
            }
        }
        &::after {
            background: rgba(0, 0, 0, 0.07);

            width: 140px;
            height: 80px;
            @media (max-width: 786px) {
                width: 110px;
                height: 70px;
            }
            z-index: -1;
        }
        &::before,
        ::after {
            @media (max-width: 786px) {
                left: 30rem;
            }
            left: 65rem;
            position: absolute;
            content: '';
            filter: blur(45px);
            transform: translateZ(0);
        }
    `}
`;
export const TitleContainer = styled.span`
    color: white;
    position: absolute;
    z-index: 1;
    left: 48rem;
    top: 12rem;
    width: 500px;
    @media (max-width: 786px) {
        width: 140px;
        left: 3.5rem;
        top: 8rem;
    }
`;
