import { Card, CardProps } from '../Card';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { mock } from './utils/mock';
import { v4 as uuid } from 'uuid';
export type ProjectsProps = {
    projects?: CardProps[];
};

export const Projects = ({ projects = mock }: ProjectsProps) => {
    return (
        <Styled.Wrapper>
            <Heading>Projetos</Heading>
            <Styled.CardContainer>
                {projects &&
                    projects.map((project) => (
                        <Card
                            key={uuid()}
                            completePage={project.completePage}
                            description={project.description}
                            title={project.title}
                            url={project.url}
                        ></Card>
                    ))}
            </Styled.CardContainer>
        </Styled.Wrapper>
    );
};
