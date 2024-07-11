import moment from "moment"

export const dateToString = (dt: Date, format: string): string => {
    return moment(dt).format(format);
}