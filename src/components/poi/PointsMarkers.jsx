import React, { useState, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";

import { useApiData } from "../../context/ApiData.context";
import { useAppState } from "../../context/AppState.context";

import PointInfo from "./PointInfo";
import { getIcon, filterPoints } from "./service";

const PointsMarkers = () => {
  const { points } = useApiData();
  const { pointCategory } = useAppState();
  const [activePoint, setActivePoint] = useState(null);

  const filteredPoints = useMemo(
    () => filterPoints({ points, pointCategory }),
    [points, pointCategory]
  );

  return (
    <>
      {filteredPoints.map(point => (
        <Marker
          key={point.id}
          position={[point.location.latitude, point.location.longitude]}
          onClick={() => setActivePoint(point)}
          icon={getIcon(pointCategory)}
        />
      ))}

      {activePoint && (
        <Popup
          className="popup"
          position={[
            activePoint.location.latitude,
            activePoint.location.longitude
          ]}
          onClose={() => setActivePoint(null)}
        >
          <PointInfo activePoint={activePoint} />
        </Popup>
      )}
    </>
  );
};

export default PointsMarkers;
