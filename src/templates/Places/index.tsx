import { CloseSquare } from '@styled-icons/evaicons-solid';
import Image from 'next/image';
import LinkWrapper from '../../components/LinkWrapper';
import * as S from './style';

type imageProps = {
  url: string;
  width: number;
  height: number;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: { html: string };
    gallery: imageProps[];
  };
};
export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <S.Header>
        <h1>{place.name}</h1>
        <LinkWrapper href="/" textLabel="Fechar">
          <CloseSquare size={52} aria-label="Fechar" />
        </LinkWrapper>
      </S.Header>
      <S.Section dangerouslySetInnerHTML={{ __html: place.description.html }} />

      <S.Gallery>
        {place.gallery.map((image: imageProps) => (
          <Image
            src={image.url}
            alt={place.name}
            key={place.name}
            width={500}
            height={800}
            quality={75}
          />
        ))}
      </S.Gallery>
    </>
  );
}
