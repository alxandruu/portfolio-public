import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { I18nService } from '../../i18n/i18n.service';
import { CurriculumVitae } from 'src/app/models/interfaces/curriculum-vitae';
import { sortByDate } from 'src/app/models/utils-constants';

@Injectable({
  providedIn: 'root'
})
export class CvManagerService {

  constructor(private firestore: Firestore, private i18s: I18nService) { }

  async getCVData(): Promise<CurriculumVitae> {
    const cvRef = doc(this.firestore, `cv/${this.i18s.lang}`);
    const docSnap = await getDoc(cvRef);
    const curriculumData = docSnap.data() as CurriculumVitae;
    curriculumData.work_experience = sortByDate(curriculumData.work_experience, "date_start");
    curriculumData.education_training = sortByDate(curriculumData.education_training, "date_start");
    return curriculumData;
  }

  //Getters & Setters



}
