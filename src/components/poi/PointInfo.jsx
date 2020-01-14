import React from "react";

const PointInfo = ({ activePoint }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr className="text-center">
          <th colSpan="2" className="h3">
            {activePoint.description}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ulica</th>
          {activePoint.address.street && (
            <td>
              {activePoint.address.street} {activePoint.address.house}
            </td>
          )}
          {!activePoint.address.street && (
            <td className="text-danger">Dokładny adres nieznany</td>
          )}
        </tr>
        {activePoint.address.city && (
          <tr>
            <th scope="row">Miasto</th>
            <td>{activePoint.address.city}</td>
          </tr>
        )}
        <tr>
          <th scope="row">Kategoria</th>
          <td>{activePoint.category}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PointInfo;
