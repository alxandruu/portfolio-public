import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  firstValueFrom } from 'rxjs';
import { CvConfiguration } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpPdfService {
  private api: string = environment.apiPdfGenerator;

  constructor(private http: HttpClient) { }

  async generateCv(template: Blob, configuration: CvConfiguration): Promise<Blob> {
    const fd = new FormData();
    fd.append('template', template)
    fd.append('configuration', JSON.stringify(configuration))

    const result$ = this.http.post(`${this.api}/generate/pdf/`, fd, { responseType: "blob" })
    return firstValueFrom(result$);
  }
}
