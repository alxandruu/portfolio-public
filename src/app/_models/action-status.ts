export interface ActionStatus {
    status: boolean;
    message?: Message;
}
interface Message {
    title: string;
    body: string;
    type: string;
}