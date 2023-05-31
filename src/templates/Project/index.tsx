import { CompletePage } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { PageSection } from '../../components/PageSection';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import * as Styled from './styles';

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
      <Styled.ArrowContainer>
        <ArrowDownwardIcon fontSize="inherit" />
      </Styled.ArrowContainer>
      <Styled.PageContent>
        {pageContent &&
          pageContent.map((content, index) => (
            <PageSection index={index} page={content} key={uuid()} />
          ))}
      </Styled.PageContent>
    </Styled.Wrapper>
  );
};
