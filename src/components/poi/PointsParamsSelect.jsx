import React from "react";

import { useAppState } from "../../context/AppState.context";

import Select from "../Select";
import options from "./options";

const PointsFilter = () => {
  const { handlePointCategoryChange } = useAppState();

  return (
    <div className="text-center">
      <h3>POI</h3>
      <Select
        onChange={handlePointCategoryChange}
        label="Wybierz kategorię"
        options={options}
      />
    </div>
  );
};

export default PointsFilter;
