import { Timestamp } from "firebase/firestore";

export interface History {
    type: number;
    timestamp: Timestamp;
    action: number;
    user: string;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}