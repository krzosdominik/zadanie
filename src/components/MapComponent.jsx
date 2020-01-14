import React from "react";
import * as Leaflet from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { GestureHandling } from "leaflet-gesture-handling";

import { useAppState } from "../context/AppState.context";

import CarsMarkers from "./cars/CarsMarkers";
import ParkingsMarkers from "./parkings/ParkingsMarkers";
import PointsMarkers from "./poi/PointsMarkers";

Leaflet.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

const MapComponent = () => {
  const { visibleMarkers } = useAppState();

  return (
    <Map
      center={[51.9189046, 19.1343786]}
      zoom={6}
      className="text-center shadow-lg rounded-lg"
      gestureHandling={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {visibleMarkers === "vehicles" && <CarsMarkers />}
        {visibleMarkers === "parkings" && <ParkingsMarkers />}
        {visibleMarkers === "poi" && <PointsMarkers />}
      </MarkerClusterGroup>
    </Map>
  );
};

export default MapComponent;
