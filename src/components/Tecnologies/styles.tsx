import styled, { css, keyframes } from 'styled-components';
import { Title } from '../Heading/styles';
const slice = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(-930%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const AllTechs = styled.div`
    ${() => css`
        color: #8b8b8b;
        /* background-color: rgba(0, 0, 0, 0.5); */
        display: flex;
        @media (min-width: 728px) {
            align-items: center;
            justify-content: center;
        }
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        height: 100px;
    `}
`;
export const Tech = styled.div`
    ${() => css`
        margin: 5px;
        width: 100px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (max-width: 728px) {
            animation: ${slice} 20s linear infinite;
        }
        &:hover {
            color: white;
        }
    `}
`;
export const Wrapper = styled.section`
    ${() => css`
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > ${Title} {
            padding: 30px;
            color: white;
            @media (min-width: 728px) {
                padding-top: 50px;
            }
        }
    `}
`;
export const TechDescription = styled.p`
    padding-top: 3px;
    font-size: 9px;
`;
