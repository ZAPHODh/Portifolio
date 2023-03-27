import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        border-radius: 10px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #8c8c8c;
        background-color: rgba(0, 0, 0, 0.2);
        width: 270px;
        border: 1px solid #8c8c8c;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    `}
`;
