import * as Styled from './styles';

export type FooterProps = {
  name?: string;
  phone?: string;
  email?: string;
  bg?: boolean;
};

export const Footer = ({
  name = 'Luis Martins',
  phone = '21 995287456',
  email = 'ytluispaulo.ni@gmail.com',
  bg = false,
}: FooterProps) => {
  return (
    <Styled.Wrapper bg={bg}>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </Styled.Wrapper>
  );
};
