import { parkingIcon } from "../../markers";

export const getIcon = () => parkingIcon;

export const filterParkings = ({ parkings, parkingAvailableSpace }) => {
    return parkings
        .filter(({ availableSpacesCount }) => {
            if (parkingAvailableSpace === "0") {
                return availableSpacesCount === 0;
            }
            if (parkingAvailableSpace === "1") {
                return availableSpacesCount === 1;
            }
            if (parkingAvailableSpace === "2-3") {
                return availableSpacesCount >= 2 && availableSpacesCount <= 3;
            }
            if (parkingAvailableSpace === "4-5") {
                return availableSpacesCount >= 4 && availableSpacesCount <= 5;
            }
            if (parkingAvailableSpace === ">5") {
                return availableSpacesCount > 5;
            }
            return true;
        });
}