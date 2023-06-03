import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Project } from 'src/app/_models/project';
import { I18nService } from '../../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsManagerService {

  constructor(private firestore: Firestore, private i18s: I18nService) { }

  getProjects(): Observable<Project[]> {
    let projectsRef = collection(this.firestore, `projects/${this.i18s.lang}/data`);
    return collectionData(projectsRef, { idField: 'id' }) as Observable<Project[]>;
  }

  async getProject(id: string): Promise<Project> {
    let projectRef = doc(this.firestore, `projects/${this.i18s.lang}/data`, id);
    const docSnap = await getDoc(projectRef);

    return docSnap.data() as Project;
  }
}
