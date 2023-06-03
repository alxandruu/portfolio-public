import moment from "moment";

export class ComponentsUtils {
    public static propertyDefault(availables: Array<Object>, input: Object, df: Object): Object {
        return availables.find(el => el === input) ? input : df;
    }
}

export class UtilsMethods {
    public static sortByDate(arr: Array<any>, key: string | number, date_format: string): Array<any> {
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

    public static showLoading(): void {
        $(".loading-icon").addClass("active");
    }
    public static hideLoading(): void {
        $(".loading-icon").removeClass("active");
    }
}