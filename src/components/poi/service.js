import { starIcon, defaultIcon, dwarfIcon, trainIcon } from "../../markers";

export const getIcon = category => {
    if (category === "interesting") {
        return starIcon;
    }
    if (category === "railway-stations") {
        return trainIcon;
    }
    if (category === "dwarfs") {
        return dwarfIcon;
    }
    return defaultIcon;
};

export const filterPoints = ({ points, pointCategory }) => {
    return points
        .filter(({ category }) => {
            if (pointCategory === "interesting") {
                return category === "Ciekawe miejsca";
            }
            if (pointCategory === "railway-stations") {
                return category === "Stacje kolejowe";
            }
            if (pointCategory === "dwarfs") {
                return category === "Krasnale";
            }
            return true;
        });
}