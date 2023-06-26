import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: -26.990299595751235,
  lng: -48.638515207944316,
};

const LocationPin = () => (
  <div className="raio"></div>
);

const Maps = ({ latI, lngI, zoomLevel }) => {
  const defaultCenter = latI
    ? { lat: parseFloat(latI), lng: parseFloat(lngI) }
    : center;

  return (
    <LoadScript googleMapsApiKey="AIzaSyBswLCO_NJ1ZPqCfxFr6aNX0pyaw1SyhvM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={zoomLevel || 13}
      >
        {latI && (
          <Marker
            position={defaultCenter}
            icon={<LocationPin />}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;