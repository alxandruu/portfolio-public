import moment from "moment";

export {
    propertyDefault,
    sortByDate,
    showLoading,
    hideLoading,
}

/**
 * Finds a value inside an array of values. If not found, it returns the default value
 * 
 * @param values Array of values 
 * @param value Value that needs to be find inside the array of values
 * @param defaultValue Default object returned if input has not been found
 * @returns The found or default value
 */
function propertyDefault(values: Array<Object>, value: Object, defaultValue: Object): Object {
    return values.find(el => el === value) ? value : defaultValue;
}

/**
 * Sorts an array of values by date
 * 
 * @param arr Array of objects to be sorted
 * @param prop Property of the object used to sort the array. Ex: date_start
 * @param date_format Format of the date. By default is dd.MM.YYYY
 * @returns An array of objects sorted by date
 */
function sortByDate<T>(arr: Array<T>, prop: keyof T, date_format: string = 'dd.MM.YYYY'): Array<T> {
    arr.sort((a, b) => {
        const amoment = moment(a[prop] as any , date_format).valueOf()
        const bmoment = moment(b[prop] as any, date_format).valueOf()
        return (amoment < bmoment) ? 1 : -1
    });
    return arr.sort()
}

/**
 * Shows the asynchronous loading icon
 * 
 */
function showLoading(): void {
    //TODO improve the managing of the loading icon, by removing dom managing and implementing angular
    document.querySelector('.loading-icon')?.classList.add('active')
    document.body.style.overflow = "hidden"
}

/**
 * Hides the asynchronous loading icon
 * 
 */
function hideLoading(): void {
    //TODO improve the managing of the loading icon, by removing dom managing and implementing angular
    document.querySelector('.loading-icon')?.classList.remove('active')
    document.body.style.overflow = "inherit"
}
