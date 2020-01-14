import { rentedCar, availableCar } from "../../markers";

export const getIcon = status => {
    if (status.toLowerCase() === "available") {
        return availableCar;
    }
    return rentedCar;
}

export const filterCars = ({ cars, carStatus, carChargeLevel }) => {
    return cars
        .filter(({ status }) => {
            if (carStatus === "available") {
                return status.toLowerCase() === "available";
            }
            if (carStatus !== "all" && carStatus !== "available") {
                return status.toLowerCase() !== "available";
            }
            return true;
        })
        .filter(({ batteryLevelPct }) => {
            if (carChargeLevel === "<30") {
                return batteryLevelPct < 30;
            }
            if (carChargeLevel === "30-50") {
                return batteryLevelPct >= 30 && batteryLevelPct <= 50;
            }
            if (carChargeLevel === "50-80") {
                return batteryLevelPct >= 50 && batteryLevelPct <= 80;
            }
            if (carChargeLevel === ">80") {
                return batteryLevelPct > 80;
            }
            return true;
        });
}
