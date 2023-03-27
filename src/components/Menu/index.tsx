import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import { v4 as uuidv4 } from 'uuid';
import { signIn, useSession } from 'next-auth/react';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';
import { Heading } from '../Heading';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export type menuLink = {
  name: string;
  to: string;
};
export type MenuProps = {
  menuLink?: menuLink[];
};

export const Menu = ({
  menuLink = [
    { name: 'story', to: '#Perfil' },
    { name: 'story', to: '#Projects' },
    { name: 'story', to: '#' },
    { name: 'story', to: '#' },
  ],
}: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickGames = () => {
    router.push('/games');
  };
  const handleClickMenuIcon = () => {
    setOpenMenu((opened) => !opened);
  };
  const handleClickMenuLink = () => {
    setOpenMenu(false);
  };
  const handleCloseMenuNav = () => {
    setOpenMenu(false);
  };
  return (
    <Styled.Wrapper isFixed={isFixed}>
      <Heading as="h2">ZAPHODh</Heading>
      <Styled.ContainerSmallWindow>
        {session ? (
          <Button onClick={handleClickGames}>Jogos</Button>
        ) : (
          <Button
            onClick={() => {
              signIn();
            }}
          >
            Login
          </Button>
        )}

        <Styled.Hamburguer onClick={handleClickMenuIcon}>
          <MenuIcon fontSize="inherit" />
        </Styled.Hamburguer>

        <Styled.MenuNav clicked={openMenu}>
          <Styled.CloseMenuSmallWindow onClick={handleCloseMenuNav}>
            <CloseIcon fontSize="inherit" />
          </Styled.CloseMenuSmallWindow>
          {menuLink &&
            menuLink.map((link) => (
              <MenuLink
                href={link.to}
                key={uuidv4()}
                onClick={handleClickMenuLink}
              >
                {link.name}
              </MenuLink>
            ))}
        </Styled.MenuNav>
      </Styled.ContainerSmallWindow>
    </Styled.Wrapper>
  );
};
