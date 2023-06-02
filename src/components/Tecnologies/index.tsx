import * as Styled from './styles';

import { Heading } from '../Heading';

import { technologiesData } from './data';
export const Tecnologies = () => {
  const handleTechClick = (link: string) => {
    window.open(link, '_blank');
  };
  return (
    <Styled.Wrapper>
      <Heading>Tecnologias</Heading>
      <Styled.AllTechs>
        {technologiesData.map((tech, index) => (
          <Styled.Tech
            key={index}
            onClick={() => {
              handleTechClick(tech.link);
            }}
          >
            <tech.icon width={'50px'} />
            <Styled.TechDescription>{tech.description}</Styled.TechDescription>
          </Styled.Tech>
        ))}
      </Styled.AllTechs>
    </Styled.Wrapper>
  );
};
