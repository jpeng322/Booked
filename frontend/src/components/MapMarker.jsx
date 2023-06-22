import { useState, useRef, useEffect } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useLoaderData } from "react-router-dom";
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
  const placeId = useLoaderData();
  // console.log(placeId)

  const [code, setCode] = useState("");
  const [providerCode, setProviderCode] = useState("");
  const [lati, setLati] = useState();
  const [long, setLong] = useState();
  // console.log(code);
  // const center = useMemo(() => ({ lat: 44 + , lng: -80 }), []);
  console.log(providerCode);

  // geocodeByAddress(placeId.providerAddress).then((results) =>
  //   console.log(
  //     getLatLng(results[0]).then(({ lat, lng }) => {
  //       // setLati(lat);
  //       // setLong(lng);
  //       // setProviderCode({ lat, lng });
  //     })
  //   )
  // );
  let center;
  useEffect(() => {
    geocodeByPlaceId(placeId.address_id)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setLati(lat);
        setLong(lng);
        setCode({ lat, lng });
        // center = { lat, lng };
        // console.log(code.lat + 44 / 2);
        // console.log("Successfully got latitude and longitude", { lat, lng });
        return { lat, lng };
      })
      .catch((error) => console.error(error));

    geocodeByAddress(placeId.providerAddress).then((results) =>
      getLatLng(results[0]).then(({ lat, lng }) => {
        // setLati(lat);
        // setLong(lng);
        setProviderCode({ lat, lng });
      })
    );
  }, []);

  geocodeByPlaceId("ChIJ9V8ApDBFwokR0dW6ql0Pyoc")
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

  // console.log({ lat: lati + 20, lng: long + 20 });
  return (
    <>
      <GoogleMap
        zoom={10}
        center={{
          lat: (code.lat + providerCode.lat) / 2,
          lng: (code.lng + providerCode.lng) / 2,
        }}
        mapContainerClassName="map-container"
      >
        <MarkerF className="" position={code} />
        <MarkerF
          className=""
          position={{ lat: providerCode.lat, lng: providerCode.lng}}
          options={{
            icon: "https://img.icons8.com/?size=1x&id=12229&format=png",
          }}
          scale={0.1}
        />
      </GoogleMap>
    </>
  );
}
