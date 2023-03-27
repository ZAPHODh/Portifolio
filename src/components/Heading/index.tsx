import * as Styled from './styles';
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps = {
  children: React.ReactNode | string;
  as?: HeadingType;
  isButton?: boolean;
  onClick?: () => void;
};

export const Heading = ({
  children,
  as = 'h1',
  isButton = false,
  onClick,
}: HeadingProps) => {
  return (
    <Styled.Title as={as} onClick={onClick} isButton={isButton}>
      {children}
    </Styled.Title>
  );
};
