import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import useCards from "../hooks/useCards";

const containerStyle = {
  width: "400px",
  height: "400px",
};

export default function MapComponent({ cardData }) {

 const {addressForMap, mapCenter} = useCards();

// useEffect(() => {
//   addressForMap(cardData.address);
// }, [addressForMap, cardData]);


  return (
    <LoadScript googleMapsApiKey="1">
      <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={10}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

//AIzaSyAoMZaKDM1b52gc-j9aMUvngp_Flo48G6s
