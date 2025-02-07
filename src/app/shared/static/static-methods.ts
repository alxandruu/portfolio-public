import { Timestamp } from "firebase/firestore";
import moment from "moment"
import { Resource } from "src/app/core/models/interfaces/resource";

export const sortHighlighted = (obj1: Resource, obj2: Resource): number => {
    if (obj1.highlighted && !obj2.highlighted)
        return -1;
    else if (!obj1.highlighted && obj2.highlighted)
        return 1;
    else
        return 0;
}