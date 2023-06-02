'use client';

import { Title } from '../../components/Heading/styles';
import styled, { css, keyframes } from 'styled-components';
export const Wrapper = styled.main`
    ${() => css`
        position: relative;
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
        height: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: linear-gradient(#000000, transparent);
    `}
`;
export const ArrowContainer = styled.div`
    ${() => css`
    position: absolute;
    top:53rem;
    font-size: 50px;
    animation: ${ArrowAnimation}  0.5s ease-in infinite;
    @media (min-width: 1921px) {
        top:73rem;
        animation: ${ArrowAnimationBigScreen}  0.5s ease-in infinite;
        }
    `}
`;
const ArrowAnimation = keyframes`
    0%{
        top: 53rem;
    }
    50%{
        top: 55rem;
    }
    100%{
        top: 53rem;
    }
`;
const ArrowAnimationBigScreen = keyframes`
    0%{
        top: 73rem;
    }
    50%{
        top: 75rem;
    }
    100%{
        top: 73rem;
    }
`;

export const LinksContainer = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  `}
`;
