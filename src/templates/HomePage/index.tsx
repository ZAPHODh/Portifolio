import { Menu } from '@/components/Menu';
import { Perfil } from '@/components/Perfil';
import { Projects } from '@/components/Projects';
import { Tecnologies } from '@/components/Tecnologies';
import Head from 'next/head';
import * as Styled from './styles';
import { Footer } from '@/components/Footer';

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>Portifolio</title>
      </Head>
      <Styled.Wrapper>
        <Menu />
        <Perfil
          buttons={[
            {
              title: 'Sobre...',
              description:
                'Tenho 26 anos e sou desenvolvedor a 2. Amo o que faço',
            },
            {
              title: 'Formação',
              description: 'Sistema da informação - incompleto',
            },
            {
              title: 'Cursos',
              description: 'Em construção',
            },
          ]}
        />
        <Tecnologies />
        <Projects />
        <Footer />
      </Styled.Wrapper>
    </>
  );
};
