import dynamic from 'next/dynamic';
import Main from '../components/Main';
// import Map from '../components/Map';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <Main />
      <Map />
    </>
  );
}
