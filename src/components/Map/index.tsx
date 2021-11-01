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

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[-15.7801, -47.5604]}
      zoom={3}
      style={{ height: '90%', width: '70%', borderRadius: '8px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, location }) => {
        const { latitude, longitude } = location;

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
