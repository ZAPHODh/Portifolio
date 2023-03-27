import { CompletePage } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { PageSection } from '../../components/PageSection';
import * as Styled from './styles';
import Banner from '../../../public/assets/images/projectBanner.webp';
import { v4 as uuid } from 'uuid';

export type ProjectProps = {
    title?: string;
    pageContent: CompletePage[];
};

export const Project = ({ title, pageContent }: ProjectProps) => {
    return (
        <Styled.Wrapper>
            <Menu />
            <Styled.BannerContainer>
                <Heading as="h1">{title}</Heading>
            </Styled.BannerContainer>
            <Styled.PageContent>
                {pageContent &&
                    pageContent.map((content, index) => (
                        <PageSection
                            index={index}
                            page={content}
                            key={uuid()}
                        />
                    ))}
            </Styled.PageContent>
        </Styled.Wrapper>
    );
};
