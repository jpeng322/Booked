import { useState, useRef, useEffect } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export default function MapMarker() {
  //   useEffect(() => {
  // geocodeByPlaceId("ChIJ9V8ApDBFwokR0dW6ql0Pyoc")
  //   //  .then((results) => console.log(results))
  //   .then((results) => console.log(results))
  //   .then((results) => getLatLng(results[0]))
  //   .then(({ lat, lng }) => {
  //     console.log("Successfully got latitude and longitude", { lat, lng });
  //     return { lat, lng };
  //   })
  //   .catch((error) => console.error(error));

  // }, []);

  //   function geocodeByPlaceId(
  //     placeId
  //   ) {
  //     console.log(placeId);
  //       var geocoder = new window.google.maps.Geocoder();
  //       console.log(geocoder)
  //     var OK = window.google.maps.GeocoderStatus.OK;

  //     return new Promise(function (resolve, reject) {
  //       geocoder.geocode({ placeId: placeId }, function (results, status) {
  //         if (status !== OK) {
  //           reject(status);
  //         }
  //         resolve(results);
  //       });
  //     });
  //   };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [code, setCode] = useState("");
  const coords = useRef();

  useEffect(() => {
    geocodeByPlaceId("ChIJ9V8ApDBFwokR0dW6ql0Pyoc")
      //  .then((results) => console.log(results))
      // .then((results) => console.log(results))
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
           setCode({ lat, lng });
        set;
        console.log("Successfully got latitude and longitude", { lat, lng });
        return { lat, lng };
      })
      .catch((error) => console.error(error));
  }, []);

  geocodeByPlaceId("ChIJ9V8ApDBFwokR0dW6ql0Pyoc")
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

  //     geocodeByAddress('Montevideo, Uruguay')
  // .then(results => getLatLng(results[0]))
  // .then(({ lat, lng }) =>
  //   console.log('Successfully got latitude and longitude', { lat, lng })
  // );
  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF className="" position={center} />
        <MarkerF
          className=""
          position={code}
          options={{
            icon: "https://img.icons8.com/?size=1x&id=12229&format=png",
          }}
          scale={0.05}
        />
      </GoogleMap>
    </>
  );
}
