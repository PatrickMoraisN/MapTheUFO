import dynamic from 'next/dynamic';
import Main from '../../components/Main';
import { MapProps } from '../../components/Map';
import * as S from './style';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <Main />
      <S.P>Clique em um dos Pings para saber um pouco de cada caso!</S.P>
      <S.MapContainer>
        <Map places={places} />
      </S.MapContainer>
    </>
  );
}
