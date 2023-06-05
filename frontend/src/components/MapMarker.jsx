import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


export default function MapMarker() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <>
      {/* <img src={HomeIcon} /> */}
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF className="" position={center} />
        <MarkerF
          className=""
          position={{ lat: 44, lng: -80.5 }}
          options={{
            icon: "https://img.icons8.com/?size=1x&id=12229&format=png",
          }}
          scale={0.05}
        />
      </GoogleMap>
    </>
  );
}
