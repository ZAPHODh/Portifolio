'use client';

import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
    ${() => css`
    width: 250px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    border-radius: 20px;
    background-color: rgba(0,0,0,0.08);
    margin: 15px;
    >${Title}{
        margin-top: 50px;
    }
    `}
`;
