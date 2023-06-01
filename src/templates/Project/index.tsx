import { CompletePage } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { PageSection } from '../../components/PageSection';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import PageviewIcon from '@mui/icons-material/Pageview';
import * as Styled from './styles';

import { v4 as uuid } from 'uuid';
import { Button } from '@/components/Button';
import { useState } from 'react';

export type Links = {
  git: string;
  appPage: string;
};
export type ProjectProps = {
  title?: string;
  pageContent: CompletePage[];
  links?: Links;
};

export const Project = ({ title, pageContent, links }: ProjectProps) => {
  const [hasGit, setHasGit] = useState(true);
  const [hasPage, setHasPage] = useState(true);
  const handleGitClick = () => {
    if (!links?.git) {
      setHasGit(false);
      return;
    }
    window.open(links.git, '_blank');
  };
  const handlePageClick = () => {
    if (!links?.appPage) {
      setHasPage(false);
      return;
    }
    window.open(links.appPage, '_blank');
  };
  return (
    <Styled.Wrapper>
      <Menu />
      <Styled.BannerContainer>
        <Heading as="h1">{title}</Heading>
        <Styled.LinksContainer>
          <Button
            center={false}
            fontSize="9px"
            width={'50%'}
            onClick={handleGitClick}
            disabled={!hasGit}
          >
            <GitHubIcon />
            Acessar repositório
          </Button>
          <Button
            center={false}
            fontSize="9px"
            width={'50%'}
            onClick={handlePageClick}
            disabled={!hasPage}
          >
            <PageviewIcon />
            Acessar página
          </Button>
        </Styled.LinksContainer>
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
