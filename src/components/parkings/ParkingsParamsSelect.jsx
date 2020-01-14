import React from "react";

import { useAppState } from "../../context/AppState.context";

import Select from "../Select";
import options from "./options";

const ParkingsFilter = () => {
  const { handleAvailableSpaceChange } = useAppState();

  return (
    <div className="text-center">
      <h3>Parkingi</h3>
      <Select
        onChange={handleAvailableSpaceChange}
        label="Ilość wolnych miejsc"
        options={options}
      />
    </div>
  );
};

export default ParkingsFilter;
