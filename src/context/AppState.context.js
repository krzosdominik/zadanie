import React, { useState, useContext } from 'react';

const AppStateContext = React.createContext();

export function useAppState() {
    return useContext(AppStateContext);
}

export const AppStateProvider = ({ children }) => {
    const [visibleMarkers, setVisibleMarkers] = useState(null);
    const [carStatus, setCarStatus] = useState();
    const [carChargeLevel, setCarChargeLevel] = useState();
    const [parkingAvailableSpace, setParkingAvailableSpace] = useState();
    const [pointCategory, setPointCategory] = useState();

    const handleButtonClick = markers => () => {
        setVisibleMarkers(markers);
        resetFilterParams();
    };

    const resetFilterParams = () => {
        setCarStatus("all");
        setCarChargeLevel("all");
        setParkingAvailableSpace("all");
        setPointCategory("all");
    }

    const handleCarStatusChange = status => setCarStatus(status);
    const handleChargeLevelChange = level => setCarChargeLevel(level);
    const handleAvailableSpaceChange = space => setParkingAvailableSpace(space);
    const handlePointCategoryChange = category => setPointCategory(category);

    return (
        <AppStateContext.Provider value={{
            visibleMarkers,
            carStatus,
            carChargeLevel,
            parkingAvailableSpace,
            pointCategory,
            handleButtonClick,
            handleCarStatusChange,
            handleChargeLevelChange,
            handleAvailableSpaceChange,
            handlePointCategoryChange
        }}>
            {children}
        </AppStateContext.Provider>
    )
}
