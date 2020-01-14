import React from "react";

import { useAppState } from "../context/AppState.context";

import MapComponent from "./MapComponent";
import Buttons from "./Buttons";
import CarParamsSelect from "./cars/CarsParamsSelect";
import ParkingParamsSelect from "./parkings/ParkingsParamsSelect";
import PointsParamsSelect from "./poi/PointsParamsSelect";

const Content = () => {
  const { visibleMarkers } = useAppState();

  return (
    <section className="main-content">
      <MapComponent />
      <div className="d-flex flex-column align-items-center pb-5">
        <h2 className="decoration text-center mt-5">
          Wciśnij odpowiedni przycisk aby wyświetlić dane
        </h2>
        <Buttons />
        {visibleMarkers === "vehicles" && <CarParamsSelect />}
        {visibleMarkers === "parkings" && <ParkingParamsSelect />}
        {visibleMarkers === "poi" && <PointsParamsSelect />}
      </div>
    </section>
  );
};

export default Content;
