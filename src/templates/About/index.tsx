import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';

import LinkWrapper from '../../components/LinkWrapper';
import * as S from './style';

function AboutTemplate() {
  return (
    <>
      <S.Content>
        <LinkWrapper href="/" textLabel="Fechar">
          <CloseSquare size={52} aria-label="Fechar" />
        </LinkWrapper>
      </S.Content>
      <S.Heading>
        <h1>Sobre</h1>
      </S.Heading>
    </>
  );
}

export default AboutTemplate;
