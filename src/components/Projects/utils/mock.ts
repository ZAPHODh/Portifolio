import { CardProps } from '@/components/Card';
import MauroLogo from '../../../../public/images/logo-card.webp';
import ApresentationImage from '../../../../public/images/first-mc-pic.webp';
import LighthousePerformanceImage from '../../../../public/images/lighthouse.webp';
import PortifolioGeral from '../../../../public/images/portifolioGeral.webp';
import PortifolioCard from '../../../../public/images/portifolioCard.webp';
import LightRousePortifolio from '../../../../public/images/lighthousePortifolio.webp';
export const mock: CardProps[] = [
  {
    title: 'Mauro Chrisostimo',
    description:
      'Uma SPA, com a qual o usuário consegue ver promoções, login, realizar agendamentos, ver a localidade do salão, contactar o salão por wpp e mais.',
    url: MauroLogo.src,
    completePage: [
      {
        description:
          'Uma SPA, com a qual o usuário consegue ver promoções, login, realizar agendamentos, ver a localidade do salão, contactar o salão por wpp, pelas redes sociais. Desenvolvida usando as tecnologias Nextjs para o front-end e strapi para o back-end.',
        img: ApresentationImage.src,
        title: 'Visão geral',
      },
      {
        description:
          'Resultados no lighthouse são extremamente positivos. Lighthouse é uma ferramenta do google para avaliação da página em relação a diversos aspectos: Desempenho, acessibilidade, boas práticas e SEO. Em desempenho, as notas variam entre 70 - 80, por caus do tempo de resposta do servidor e imagens. Acessibilitade sempre me da a nota maxima, ja que eu preparei a página da melhor forma nesse quesito. Nas boas práticas e CEO, também recebo nota máxima.',
        img: LighthousePerformanceImage.src,
        title: 'Desempenho',
      },
    ],
  },
  {
    title: 'Portifólio',
    description:
      'Portifólio que voces estão acessando agora. É uma aplicação feita no meu estilo, cuidado e carinho, para demonstrar minhas habilidades com desenvolvimento web',
    url: PortifolioCard.src,
    completePage: [
      {
        description:
          'Uma aplicação feita com técnologias super modernas : Next.js, Styled-componentes, StoryBoook, Jest, Next-Auth, MUI, Styled-Icons e mais.',
        img: PortifolioGeral.src,
        title: 'Visão geral',
      },
      {
        description:
          'Resultados no lighthouse são extremamente positivos. Lighthouse é uma ferramenta do google para avaliação da página em relação a diversos aspectos: Desempenho, acessibilidade, boas práticas e SEO. Em desempenho, a nota excede os 90 pontos, Sendo uma aplicação super rápida. As outras diretrizes, sendo elas acessibilidade, melhores práticas e SEO, Possuem a nota máxima que a ferramenta fornece, mostrando que a página está completamente otimizada para a web.',
        img: LightRousePortifolio.src,
        title: 'Desempenho',
      },
    ],
  },
];
