import { Menu } from '@/components/Menu';
import { Perfil } from '@/components/Perfil';
import { Projects } from '@/components/Projects';
import { Tecnologies } from '@/components/Tecnologies';
import * as Styled from './styles';
export type HomePageProps = {
    title?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomePage = ({ title }: HomePageProps) => {
    return (
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
        </Styled.Wrapper>
    );
};
