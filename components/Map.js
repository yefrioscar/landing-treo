import React, { useEffect, useRef } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";

const render = (status) => {
  console.log(status);
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const Map = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({
        position: new window.google.maps.LatLng(-12.1129362, -76.9905811),
        draggable: false,
        map: map,
        title: "Inversiones Treo SAC",
        label: {
            className: 'bg-marker p-1 rounded-md text-white text-xs relative transfor -translate-y-1',
            fontSize: '12px',
            color: 'white',
            text: "Inversiones Treo SAC",
            fontFamily: 'Montserrat'
        },
      });
  }, []);

  return <div ref={ref} id="map" className="w-full h-72 rounded-lg" />;
};


const GoogleMaps = ({
  center = { lat: -12.1129362, lng: -76.9905811 },
  zoom = 17,
}) => {
  return (
    <Wrapper apiKey="AIzaSyCIk9_Tpe3AeGYqC-jetYAKYbN7NAiO_PU" render={render}>
      <Map center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default GoogleMaps;
