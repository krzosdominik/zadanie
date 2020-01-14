import React from "react";

import { useAppState } from "../../context/AppState.context";

import Select from "../Select";
import { carStatusOptions, chargeLevelOptions } from "./options";

const CarFilter = () => {
  const { handleCarStatusChange, handleChargeLevelChange } = useAppState();

  return (
    <div className="text-center">
      <h3>Pojazdy</h3>
      <Select
        onChange={handleCarStatusChange}
        label="Dostępność"
        options={carStatusOptions}
      />
      <Select
        onChange={handleChargeLevelChange}
        label="Poziom naładowania baterii"
        options={chargeLevelOptions}
      />
    </div>
  );
};

export default CarFilter;
