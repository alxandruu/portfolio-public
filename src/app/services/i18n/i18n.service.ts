import { Injectable, inject } from '@angular/core';
import i18next from 'i18next';
import ldSpanish from 'src/assets/i18n/es.json';
import ldEnglish from 'src/assets/i18n/en.json';
import ldRomanian from 'src/assets/i18n/ro.json';
import { CookiesService } from '../cookies/cookies.service';
import { Language } from 'src/app/models/interfaces';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private _lang: string = "en";
  private _languagesAvailable: Array<Language> = [{
    id: 'es',
    ref: ldSpanish
  }, {
    id: 'en',
    ref: ldEnglish,
  }, {
    id: 'ro',
    ref: ldRomanian
  }];
  private doc: Document = inject(DOCUMENT);

  constructor(private cookies: CookiesService) {

    this.webpageLanguage();
    let language = this.languagesAvailable.find(lang => lang.id == this._lang);
    i18next.init({
      lng: this._lang,
      resources: (language) ? language.ref : this.languagesAvailable[1].ref
    });
  }

  public getValue(key: string, params: Object = {}): string {
    const value = i18next.t(key, params);
    return value;
  }

  public webpageLanguage(): void {
    const language = navigator.language;
    const languages_available = this._languagesAvailable;
    const storage_language = this.cookies.getCookie(this.cookies.languageCookie);
    let val = (storage_language) ? storage_language : "en";
    let xlang = this.languagesAvailable.find((el) => { return el.id == storage_language });

    if (!storage_language || !xlang) {
      let ylang = this.languagesAvailable.find((el) => { return el.id == language });
      if (ylang) {
        val = ylang.id;
      } else {
        val = languages_available[1].id;
      }

      this.cookies.setCookie(this.cookies.languageCookie, val, 365);
    }
    this.doc.documentElement.setAttribute("lang", val)
    this._lang = val;
  }

  changeLanguage(key: string): void {
    this.cookies.setCookie(this.cookies.languageCookie, key, 365);
    this._lang = key;
    let language = this.languagesAvailable.find(lang => lang.id == key);
    i18next.init({
      lng: key,
      resources: (language) ? language.ref : this.languagesAvailable[1].ref
    });
    window.location.reload();
  }

  public get languagesAvailable(): Array<Language> {
    return this._languagesAvailable;
  }

  public get lang(): string {
    return this._lang;
  }
  public set lang(value: string) {
    this._lang = value;
  }
}
