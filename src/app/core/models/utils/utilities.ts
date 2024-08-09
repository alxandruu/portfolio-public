import moment from "moment";

export {
    propertyDefault,
    sortByDate,
    showLoading,
    hideLoading,
    setCookie,
    getCookie
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
        const amoment = moment(a[prop] as any, date_format).valueOf()
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

/**
 * Creates a cookie in the portal
 * 
 * @param ckname  Cookie name
 * @param ckvalue  Cookie value
 * @param exdays  Expiration days
 */
function setCookie(ckname: string, ckvalue: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = ckname + "=" + ckvalue + ";" + expires + ";path=/";
}

/**
 * Retrieves the value of the cookie, if the cookie doesn't exists it returns null
 * 
 * @param ckname Name
 * @returns Cookie value or null, if the cookie doesn't exists
 */
function getCookie(ckname: string): string | null {
    let name = ckname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}