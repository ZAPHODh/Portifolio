import * as Styled from './styles';
import { Storybook } from '@styled-icons/simple-icons/Storybook';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Strapi } from '@styled-icons/simple-icons/Strapi';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Mysql } from '@styled-icons/simple-icons/Mysql';
import { Postgresql } from '@styled-icons/simple-icons/Postgresql';
import { Jest } from '@styled-icons/simple-icons/Jest';
import { Git } from '@styled-icons/boxicons-logos/Git';
import { Mui } from '@styled-icons/simple-icons/Mui';
import { TailwindCss } from '@styled-icons/boxicons-logos/TailwindCss';
import { Bootstrap } from '@styled-icons/boxicons-logos/Bootstrap';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Heading } from '../Heading';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
export const Tecnologies = () => {
  return (
    <Styled.Wrapper>
      <Heading>Tecnologias</Heading>
      <Styled.AllTechs>
        <Styled.Tech>
          <Storybook width={'50px'} />
          <Styled.TechDescription>Storybook</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Styledcomponents width={'50px'} />
          <Styled.TechDescription>Styled C.</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Nextdotjs width={'50px'} />
          <Styled.TechDescription>Next.js</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <ReactLogo width={'50px'} />
          <Styled.TechDescription>React</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Javascript width={'50px'} />
          <Styled.TechDescription>Javascript</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Nodejs width={'50px'} />
          <Styled.TechDescription>Node.js</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Strapi width={'50px'} />
          <Styled.TechDescription>Strapi</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Mongodb width={'50px'} />
          <Styled.TechDescription>Mongodb</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Graphql width={'50px'} />
          <Styled.TechDescription>Graphql</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Mysql width={'50px'} />
          <Styled.TechDescription>MySQL</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Postgresql width={'50px'} />
          <Styled.TechDescription>Postgreesql</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Jest width={'50px'} />
          <Styled.TechDescription>Jest</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Git width={'50px'} />
          <Styled.TechDescription>Git</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Mui width={'50px'} />
          <Styled.TechDescription>Mui</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <TailwindCss width={'50px'} />
          <Styled.TechDescription>TailwindCSS</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Bootstrap width={'50px'} />
          <Styled.TechDescription>Bootstrap</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Html5 width={'50px'} />
          <Styled.TechDescription>HTML</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Css3 width={'50px'} />
          <Styled.TechDescription>CSS</Styled.TechDescription>
        </Styled.Tech>
        <Styled.Tech>
          <Redux width={'50px'} />
          <Styled.TechDescription>Redux</Styled.TechDescription>
        </Styled.Tech>
      </Styled.AllTechs>
    </Styled.Wrapper>
  );
};
