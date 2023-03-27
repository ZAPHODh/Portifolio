import * as Styled from './styles';

export type MenuLinkProps = {
    children: string;
    href: string;
    onClick: () => void;
};

export const MenuLink = ({ children, href, onClick }: MenuLinkProps) => {
    return (
        <Styled.Wrapper href={href} target="_self" onClick={onClick}>
            {children}
        </Styled.Wrapper>
    );
};
