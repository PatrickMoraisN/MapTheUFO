import dynamic from 'next/dynamic';
import Main from '../components/Main';
import * as S from './style';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <Main />
      <S.MapContainer>
        <Map
          places={[
            {
              id: '1',
              name: 'petropolis',
              slug: 'petropolis',
              location: {
                latitude: 0,
                longitude: 0
              }
            }
          ]}
        />
      </S.MapContainer>
    </>
  );
}
