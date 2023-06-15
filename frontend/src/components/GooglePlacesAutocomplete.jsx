import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import "../CSS/GooglePlacesComp.css";
const GooglePlacesComp = ({ address, setAddress, placeholder="Select Address" }) => {
  //   const [value, setValue] = useState(null);
  //   console.log(value);

  return (
    <div>
      {/* <GooglePlacesAutocomplete
        value={address}
        apiKey={import.meta.env.VITE_GOOGLE_API}
        selectProps={{
          address,
          onChange: setAddress,
            // placeholder: "asdasdasdasd",
            // inputValue: {address}
        }}
        autocompletionRequest={{
          bounds: [
            { lat: 50, lng: 50 },
            { lat: 100, lng: 100 },
          ],
        }}
          /> */}
          
      <GooglePlacesAutocomplete
      apiKey={import.meta.env.VITE_GOOGLE_API}
      autocompletionRequest={{
        componentRestrictions: {
          country: ["us"], //to set the specific country
        },
      }}
      selectProps={{
        defaultInputValue: address, //set default value
        onChange: setAddress, //save the value gotten from google
        placeholder: placeholder,
      }}
      onLoadFailed={(error) => {
        console.log(error);
      }}
    />
    </div>
  );
};

export default GooglePlacesComp;
