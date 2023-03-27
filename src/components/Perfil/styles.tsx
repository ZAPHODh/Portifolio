import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 250px;
        padding: 20px;
    `}
`;
export const ButtonContainer = styled.div`
    ${() => css`
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 200px;
        margin-right: 20%;
        @media (max-width: 724px) {
            width: 450px;
            flex-direction: column;
            margin-top: 0;
            margin-right: 0;
        }
    `}
`;
