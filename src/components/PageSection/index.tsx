import { useWindowWidth } from '@/hooks/useWindowWidth';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { CompletePage } from '../Card';
import { Description } from '../Description';
import { Heading, HeadingType } from '../Heading';

import * as Styled from './styles';
export type PageSectionProps = {
  page: CompletePage;
  index: number;
};

export const PageSection = ({ page, index }: PageSectionProps) => {
  const windowWidth = useWindowWidth();
  const [progress, setProgress] = useState(0);
  return (
    <Parallax onProgressChange={(progress) => setProgress(progress)}>
      <Styled.Wrapper index={index}>
        {windowWidth <= 728 && (
          <Heading as={`h${index + 2}` as HeadingType}>{page.title}</Heading>
        )}
        <Styled.ImgContainer progress={progress}>
          <Styled.Img src={page.img} alt={page.title} />
        </Styled.ImgContainer>
        <Styled.TextContainer progress={progress} index={index}>
          {windowWidth > 728 && (
            <Heading as={`h${index + 2}` as HeadingType}>{page.title}</Heading>
          )}
          <Description color="white">{page.description}</Description>
        </Styled.TextContainer>
      </Styled.Wrapper>
    </Parallax>
  );
};
