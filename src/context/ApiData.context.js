import React, { useState, useEffect, useContext } from 'react';

import getData from "../api";

const ApiDataContext = React.createContext();

export function useApiData() {
    return useContext(ApiDataContext);
}

export const ApiDataProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [parkings, setParkings] = useState([]);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        Promise.all([
            getData("VEHICLE"),
            getData("PARKING"),
            getData("POI")
        ]).then(([cars, parkings, points]) => {
            setCars(cars);
            setParkings(parkings);
            setPoints(points);
        }).catch(error => alert(error.message))
    }, []);

    return (
        <ApiDataContext.Provider value={{ cars, parkings, points }}>
            {children}
        </ApiDataContext.Provider>
    )
}