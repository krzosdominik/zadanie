import React, { useState, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";

import { useApiData } from "../../context/ApiData.context";
import { useAppState } from "../../context/AppState.context";

import ParkingInfo from "./ParkingInfo";
import {getIcon, filterParkings} from "./service";

const ParkingsMarkers = () => {
  const { parkings } = useApiData();
  const { parkingAvailableSpace } = useAppState();
  const [activeParking, setActiveParking] = useState(null);

  const filteredParkings = useMemo(
    () => filterParkings({ parkings, parkingAvailableSpace }),
    [parkings, parkingAvailableSpace]
  );

  return (
    <>
      {filteredParkings.map(parking => (
        <Marker
          key={parking.id}
          position={[parking.location.latitude, parking.location.longitude]}
          onClick={() => setActiveParking(parking)}
          icon={getIcon()}
        />
      ))}

      {activeParking && (
        <Popup
          className="popup"
          position={[
            activeParking.location.latitude,
            activeParking.location.longitude
          ]}
          onClose={() => setActiveParking(null)}
        >
          <ParkingInfo activeParking={activeParking} />
        </Popup>
      )}
    </>
  );
};

export default ParkingsMarkers;
