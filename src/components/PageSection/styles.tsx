import styled, { css, keyframes } from 'styled-components';
import { Wrapper as Description } from '../Description/styles';
import { Title } from '../Heading/styles';
const animationLeft = keyframes`
    0%{
        margin-right:150px;
        opacity: 50%;
    }
    100%{
        margin-right: 0;
        opacity: 100%;
    }
`;

const Shake = keyframes`
    0% {
        transform: translate(0, 0);
        opacity: 0%;
    }
    10% {
        transform: translate(5px, 0);
        opacity: 10%;
    }
    20% {
        transform: translate(0, 0);
        opacity: 20%;
    }
    30% {
        transform: translate(-5px, 0);
        opacity: 30%;
    }
    40% {
        transform: translate(0, 0);
        opacity: 40%;
    }
    50% {
        transform: translate(5px, 0);
        opacity: 50%;
    }
    60% {
        transform: translate(0, 0);
        opacity: 60%;
    }
    70% {
        transform: translate(-5px, 0);
        opacity: 70%;
    }
    80% {
        transform: translate(0, 0);
        opacity: 80%;
    }
    90% {
        transform: translate(5px, 0);
        opacity: 90%;
    }
    100% {
        transform: translate(0, 0);
        opacity: 100%;
    }
`;

const Invisible = keyframes`
    0% {
        opacity: 100%;
    }
   
    100% {
        opacity: 0%;
    }
`;

const Visible = keyframes`
    0% {
        opacity: 0%;
    }
   
    100% {
        opacity:100%;
    }
`;

export const Wrapper = styled.div<{ index: number }>`
    ${({ index }) => css`
        position: relative;
        overflow: hidden;
        width: 600px;
        height: 400px;
        display: flex;

        align-items: center;
        justify-content: center;
        flex-direction: ${index % 2 === 0 ? ' row' : 'row-reverse'};
        margin: 250px 0px;
        @media (max-width: 728px) {
            flex-direction: column;
            width: 100%;
            margin: 30px 0px;
            padding: 10px 0px;
            height: auto;
        }
        @media (min-width: 728px) {
            animation: ${animationLeft} 0.3s;
        }
        > ${Title} {
            padding: 15px 0;
            font-size: 23px;
        }
    `}
`;

export const TextContainer = styled.div<{ progress: number; index: number }>`
    ${({ progress, index }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        width: 50%;
        @media (max-width: 728px) {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        > ${Title} {
            font-size: 23px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            @media (min-width: 728px) {
                ${
                  index % 2 === 0
                    ? 'margin-left: 550px;'
                    : 'margin-right: 550px;'
                };
                transition: all 0.5s;
                ${() => {
                  if (progress > 0.3 && progress < 0.7)
                    return css`
                            ${
                              index % 2 === 0
                                ? 'margin-left: 0;'
                                : 'margin-right: 0;'
                            };
                        `;
                }};
            }
        }
        > ${Description} {
            @media (min-width: 728px) {
                opacity:0%
                transition: all 2s ease-in;
                ${() => {
                  if (progress > 0.3 && progress < 0.7)
                    return css`
                            animation: ${Visible} 1.5s ease-in;
                            animation-iteration-count: 1;
                            opacity: 100%;
                        `;
                  else {
                    return css`
                            opacity: 0%;
                        `;
                  }
                }};
            }
        }
    `}
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid white;
`;

export const ImgContainer = styled.div<{ progress: number }>`
    overflow: hidden;
    @media (min-width: 728px) {
        width: 50%;
        height: 100%;
    }
    @media (max-width: 768px) {
        height: 50%;
        width: 90%;
    }
    ${({ progress }) => css`
        /* width: 100%; */
        @media (min-width: 728px) {
            ${() => {
              if (progress < 0.3 || progress > 0.7)
                return css`
                        animation: ${Invisible} 0.5s linear;
                        animation-iteration-count: 1;
                        opacity: 0;
                    `;
            }};
            ${() => {
              if (progress > 0.3 && progress < 0.7)
                return css`
                        animation: ${Shake} 0.5s linear;
                        animation-iteration-count: 1;
                    `;
            }};
        }
    `}
`;
