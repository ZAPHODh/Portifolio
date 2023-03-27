import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
    ${() => css`
        margin: 10px;
        position: relative;
        color: white;
        width: 280px;
        height: 450px;
        border-radius: 10px;
        border: 0.5px solid #8c8c8c;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        &:hover {
            border: 0.5px solid #2097f7;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
        }
        > ${Title} {
            padding: 10px;
        }
    `}
`;
export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    right: -0.9rem;
    width: 100%;
    font-size: 15px;
`;
