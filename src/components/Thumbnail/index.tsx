import * as Styled from './styles';
import Image from 'next/image';
export type ThumbnailProps = {
    src: string;
    alt: string;
};

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
    return (
        <Styled.Wrapper>
            <Image src={src} alt={alt} width={230} height={130} />
        </Styled.Wrapper>
    );
};
