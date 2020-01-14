import React from "react";

import { useAppState } from "../context/AppState.context";

const Buttons = () => {
  const { visibleMarkers, handleButtonClick } = useAppState();

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <button
        disabled={visibleMarkers === "vehicles"}
        className="btn btn-primary m-2 shadow"
        onClick={handleButtonClick("vehicles")}
      >
        Pojazdy
      </button>
      <button
        disabled={visibleMarkers === "parkings"}
        className="btn btn-info m-2 shadow"
        onClick={handleButtonClick("parkings")}
      >
        Parkingi
      </button>
      <button
        disabled={visibleMarkers === "poi"}
        className="btn btn-danger m-2 shadow"
        onClick={handleButtonClick("poi")}
      >
        POI
      </button>
    </div>
  );
};

export default Buttons;
