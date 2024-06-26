import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CVConfiguration } from '../../models/interfaces/cv-configuration';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api: string = environment.apiPdfGenerator;

  constructor(private http: HttpClient) { }

  async generateCurriculumVitaePDF(template: Blob, configuration: CVConfiguration): Promise<Blob> {
    const fd = new FormData();
    fd.append('template', template)
    fd.append('configuration', JSON.stringify(configuration))

    const result = this.http.post(`${this.api}/generate/pdf/`, fd, { responseType: "blob" })

    return firstValueFrom(result);
  }
}
