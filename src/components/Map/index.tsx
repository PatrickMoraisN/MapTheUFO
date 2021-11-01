import { useRouter } from 'next/dist/client/router';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

interface PlaceProps {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export type MapProps = {
  places: PlaceProps[];
};

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USER = process.env.NEXT_PUBLIC_MAPBOX_USER;
const MAPBOX_STYLE_ID = process.env.NEXT_PUBLIC_STYLE_ID;

const CustemTileLayer = () => {
  const url = `https://api.mapbox.com/styles/v1/${MAPBOX_USER}/${MAPBOX_STYLE_ID}/tiles/512/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`;
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='&copy; <a href="http://apps.mapbox.com/feedback">MapBox</a> contributors'
      url={url}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

const Map = ({ places }: MapProps) => {
  const router = useRouter();
  return (
    <MapContainer
      center={[-15.7801, -47.5604]}
      zoom={3}
      style={{ height: '90%', width: '70%', borderRadius: '8px' }}
    >
      <CustemTileLayer />
      {places?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location;

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`);
              }
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
