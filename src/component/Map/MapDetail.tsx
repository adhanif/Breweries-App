import React, { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import L from 'leaflet';

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  iconSize: [20, 30],
});

interface MapProps {
  center: [number, number];
  zoom: number;
  name: string;
}

const MapDetail: FC<MapProps> = ({ center, zoom, name }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{
        height: '50vh',
        minWidth: '50rem',
        borderRadius: '0.5rem',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={center} icon={icon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapDetail;
