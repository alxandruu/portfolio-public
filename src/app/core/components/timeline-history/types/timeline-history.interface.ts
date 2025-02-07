export interface TimelineHistory {
    date: {
        start: Date;
        end: Date | null;
    },
    title: string;
    headline: string | null;
    content: string
}
