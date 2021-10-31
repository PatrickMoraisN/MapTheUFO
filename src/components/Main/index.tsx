import { GiUfo } from 'react-icons/gi';
import { InfoSquare } from '@styled-icons/boxicons-solid/InfoSquare';

import LinkWrapper from '../LinkWrapper';
import * as S from './style';

export default function Main() {
  return (
    <S.Header>
      <h1>
        MapTheUFO <GiUfo />
      </h1>
      <LinkWrapper href="/about" textLabel="About">
        <InfoSquare size={52} aria-label="About" />
      </LinkWrapper>
    </S.Header>
  );
}
