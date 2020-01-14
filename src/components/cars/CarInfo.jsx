import React from "react";

const CarInfo = ({ activeCar }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr className="text-center">
          <th colSpan="2" className="h3">
            {activeCar.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Numer tablicy rejestracyjnej</th>
          <td>{activeCar.platesNumber}</td>
        </tr>
        <tr>
          <th scope="row">Numer boczny</th>
          <td>{activeCar.sideNumber}</td>
        </tr>
        <tr>
          <th scope="row">Status</th>
          <td>
            {activeCar.status.toLowerCase() === "available"
              ? "Dostępny"
              : "Niedostępny"}
          </td>
        </tr>
        <tr>
          <th scope="row">Poziom baterii</th>
          <td>{activeCar.batteryLevelPct}%</td>
        </tr>
        <tr>
          <th scope="row">Zasięg</th>
          <td>{activeCar.rangeKm} km</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CarInfo;
