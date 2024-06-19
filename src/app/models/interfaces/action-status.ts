export interface ActionStatus {
    status: boolean;
    message?: Message;
}

export interface Message {
    title: string;
    body: string;
    type: string;
}