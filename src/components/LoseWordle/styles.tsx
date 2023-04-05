import styled, { css } from 'styled-components';

import { Wrapper as Description } from '../Description/styles';

export const Wrapper = styled.div`
    ${() => css`
        width:300px;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;

        >${Description}{
            padding-top:20px;
            margin-bottom:-5px;
        }
    `}
`;
