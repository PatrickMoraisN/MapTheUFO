import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';

import LinkWrapper from '../../components/LinkWrapper';
import * as S from './style';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

function PagesTemplate({ heading, body }: PageTemplateProps) {
  return (
    <>
      <S.Content>
        <LinkWrapper href="/" textLabel="Fechar">
          <CloseSquare size={52} aria-label="Fechar" />
        </LinkWrapper>
      </S.Content>
      <S.Heading>
        <h1>{heading}</h1>
      </S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </>
  );
}

export default PagesTemplate;
