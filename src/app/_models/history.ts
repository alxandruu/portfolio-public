import { Timestamp } from "firebase/firestore";

export interface History {
    type: number;
    timestamp: Timestamp;
    action: number;
    user: string;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}

export interface Register {
    type: number;
    action: number;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}


export interface RegisterRow {
    timestamp: Timestamp;
    user: string | null;
    type: string;
    action: string;
    referenceBefore: Object | null;
    referenceAfter: Object | null;
}

