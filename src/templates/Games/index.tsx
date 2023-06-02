import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { TinyCard } from '../../components/TinyCard';
import { BannerContainer } from '../Project/styles';
import { v4 as uuid } from 'uuid';
import * as Styled from './styles';
import { Footer } from '@/components/Footer';
export type Game = {
  name: string;
  disabled: boolean;
};
export type GamesProps = {
  games: Game[];
};

export const Games = ({ games }: GamesProps) => {
  return (
    <Styled.Wrapper>
      <Menu />
      <BannerContainer>
        <Heading>Jogos</Heading>
      </BannerContainer>
      <Styled.GameContent>
        {games &&
          games.map((game) => (
            <TinyCard
              name={game.name}
              disabled={game.disabled}
              key={uuid()}
            ></TinyCard>
          ))}
      </Styled.GameContent>
      <Footer />
    </Styled.Wrapper>
  );
};
