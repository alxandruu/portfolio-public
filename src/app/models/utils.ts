import { Timestamp } from "firebase/firestore";
import moment from "moment";

export function propertyDefault(availables: Array<Object>, input: Object, df: Object): Object {
    return availables.find(el => el === input) ? input : df;
}

export function sortByDate(arr: Array<any>, key: string | number, date_format: string): Array<any> {
    arr.sort((a, b) => {
        let x = moment(a[key], date_format).valueOf();
        let y = moment(b[key], date_format).valueOf();
        if (x < y) {
            return 1;
        } else {
            return -1;
        }
    });
    return arr.sort()
}


export function showLoading(): void {
    document.querySelector('.loading-icon')?.classList.add('active')
    document.body.style.overflow = "hidden"
}
export function hideLoading(): void {
    document.querySelector('.loading-icon')?.classList.remove('active')
    document.body.style.overflow = "inherit"
}

export function currentDate(format: string): string {
    return moment().format(format)
}
export function timestampToString(stamp: Timestamp): string {
    const date = moment(stamp.toDate())
    return date.format("DD/MM/YYYY h:mm:ss")
}
export function textColor(): string {
    return getComputedStyle(document.documentElement).getPropertyValue('--dark-color')
}
export function backgroundColor(): string {
    return getComputedStyle(document.documentElement).getPropertyValue('--light-color')
}