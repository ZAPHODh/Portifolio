import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        width: 230px;
        height: 130px;
        border: 1px solid white;
        border-radius: 10px;
        overflow: hidden;
    `}
`;
