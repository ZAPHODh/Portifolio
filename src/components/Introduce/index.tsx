import { Description } from '../Description';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type IntroduceProps = {
  title?: string;
  description?: string;
};

export const Introduce = ({
  title = 'Luis Martins',
  description = 'Developer',
}: IntroduceProps) => {
  return (
    <Styled.Wrapper>
      <Styled.TitleContainer>
        <Heading as="h1">{title}</Heading>
        <Description>{description}</Description>
      </Styled.TitleContainer>
    </Styled.Wrapper>
  );
};
