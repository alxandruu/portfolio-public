import { Injectable, inject } from '@angular/core';
import i18next from 'i18next';
import lngEnglish from 'src/assets/i18n/en.json';
import lngSpanish from 'src/assets/i18n/es.json';
import lngRomanian from 'src/assets/i18n/ro.json';

import { DOCUMENT } from '@angular/common';
import { getCookie, setCookie } from '../../models/utils/utilities';
import { Language } from '../../types/language.interface';

const LANGUAGE_COOKIE: string = "language"

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private _lang: string = "en";
  public languages: Array<Language> = [{
    id: 'es',
    description: 'Español',
    ref: lngSpanish
  }, {
    id: 'en',
    description: 'English',
    ref: lngEnglish,
  }, {
    id: 'ro',
    description: 'Română',
    ref: lngRomanian
  }];

  private doc: Document = inject(DOCUMENT);

  constructor() {
    this.webpageLanguage();
    let language = this.languages.find(lang => lang.id == this._lang);
    i18next.init({
      lng: this._lang,
      resources: (language) ? language.ref : this.languages[1].ref
    });
  }

  public getValue(key: string, params: Object = {}): string {
    const value = i18next.t(key, params);
    return value;
  }

  public webpageLanguage(): void {
    const language = navigator.language;
    const languages_available = this.languages;
    const storage_language = getCookie(LANGUAGE_COOKIE);
    let val = (storage_language) ? storage_language : "en";
    let xlang = this.languages.find((el) => { return el.id == storage_language });

    if (!storage_language || !xlang) {
      let ylang = this.languages.find((el) => { return el.id == language });
      if (ylang) {
        val = ylang.id;
      } else {
        val = languages_available[1].id;
      }

      setCookie(LANGUAGE_COOKIE, val, 365);
    }
    this.doc.documentElement.setAttribute("lang", val)
    this._lang = val;
  }

  changeLanguage(key: string): void {
    setCookie(LANGUAGE_COOKIE, key, 365);
    this._lang = key;
    let language = this.languages.find(lang => lang.id == key);
    i18next.init({
      lng: key,
      resources: (language) ? language.ref : this.languages[1].ref
    });
    window.location.reload();
  }

  public get lang(): string {
    return this._lang;
  }
  public set lang(value: string) {
    this._lang = value;
  }
}
