import React from "react";

const ParkingInfo = ({ activeParking }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr className="text-center">
          <th colSpan="2" className="h3">
            {activeParking.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ulica</th>
          <td>
            {activeParking.address.street} {activeParking.address.house}
          </td>
        </tr>
        <tr>
          <th scope="row">Miasto</th>
          <td>{activeParking.address.city}</td>
        </tr>
        <tr>
          <th scope="row">Wolnych miejsc</th>
          <td>
            {activeParking.availableSpacesCount} / {activeParking.spacesCount}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ParkingInfo;
