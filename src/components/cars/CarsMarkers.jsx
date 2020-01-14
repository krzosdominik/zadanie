import React, { useState, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";

import { useApiData } from "../../context/ApiData.context";
import { useAppState } from "../../context/AppState.context";

import CarInfo from "./CarInfo";
import { getIcon, filterCars } from "./service";

const CarsMarkers = () => {
  const { cars } = useApiData();
  const { carStatus, carChargeLevel } = useAppState();
  const [activeCar, setActiveCar] = useState(null);

  const filteredCars = useMemo(
    () => filterCars({ cars, carStatus, carChargeLevel }),
    [cars, carStatus, carChargeLevel]
  );

  return (
    <>
      {filteredCars.map(car => (
        <Marker
          key={car.id}
          position={[car.location.latitude, car.location.longitude]}
          onClick={() => setActiveCar(car)}
          icon={getIcon(car.status)}
        />
      ))}

      {activeCar && (
        <Popup
          className="popup"
          position={[activeCar.location.latitude, activeCar.location.longitude]}
          onClose={() => setActiveCar(null)}
        >
          <CarInfo activeCar={activeCar} />
        </Popup>
      )}
    </>
  );
};

export default CarsMarkers;
