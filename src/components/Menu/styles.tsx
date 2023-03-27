'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.header<{ isFixed: boolean }>`
    ${({ isFixed }) => css`
        color: white;
        ${isFixed && 'position: fixed'};
        z-index: 10;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 70px;
        padding: 10px 20px;
    `}
`;
export const MenuNav = styled.nav<{ clicked: boolean }>`
    ${({ clicked }) => css`
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            display: ${clicked ? 'flex' : 'none'};
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            background-color: black;
            align-items: center;
            justify-content: center;
        }
    `}
`;
export const Hamburguer = styled.div`
    ${() => css`
        display: none;
        font-size: 40px;
        border-radius: 50%;
        display: none;
        padding: 5px;
        @media (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.05);
            box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
        }
    `}
`;

export const ContainerSmallWindow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CloseMenuSmallWindow = styled.button`
    display: none;
    background-color: transparent;
    border: 1px solid transparent;
    position: absolute;
    z-index: 1;
    color: #8b8b8b;
    font-size: 20px;
    border-radius: 5px;
    top: 2rem;
    right: 2rem;
    padding: 5px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover {
        cursor: pointer;
        border: 1px white solid;
        color: white;
    }
`;

export const Divisor = styled.div`
   border: 1px solid #8b8b8b;
   height: 20px;
   margin: 5px;
`;
