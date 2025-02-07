import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';

const getWindow = (platformId: object): Window | null =>
    isPlatformBrowser(platformId) ? inject(DOCUMENT).defaultView : null

export const WINDOW = new InjectionToken<Window | null>('WINDOW', {
    providedIn: 'root',
    factory: () => getWindow(inject(PLATFORM_ID)),
});