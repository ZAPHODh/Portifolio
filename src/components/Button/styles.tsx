import styled, { css } from 'styled-components';
type Button = {
    rounded: boolean;
    width: number | string;
    borderColor: string;
    fontSize: string;
    center: boolean;
};
export const Wrapper = styled.button<Button>`
    ${({ rounded, width, borderColor, fontSize, center }) => css`
        margin: 5px;
        width: ${width};
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: ${fontSize};
        justify-content: ${center ? 'center' : 'space-between'};
        border-radius: ${!rounded ? '10px' : '50%'};
        color: #8c8c8c;
        transition: all 0.2s;
        background-color: transparent;
        border: 1px solid #8c8c8c;
        &:hover {
            cursor: pointer;
            border: 1px solid ${borderColor};
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
        }
    `}
`;
