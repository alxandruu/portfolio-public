import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { CV } from 'src/app/models/interfaces';
import { I18nService } from '../../i18n/i18n.service';
import { sortByDate } from 'src/app/models/utils';
@Injectable({
  providedIn: 'root'
})
export class CvManagerService {

  constructor(private firestore: Firestore, private i18s: I18nService) { }

  async getCVData(): Promise<CV> {
    const cvRef = doc(this.firestore, `cv/${this.i18s.lang}`);
    const docSnap = await getDoc(cvRef);
    const curriculumData = docSnap.data() as CV;
    curriculumData.work_experience = sortByDate(curriculumData.work_experience, "date_start", 'dd.MM.YYYY');
    curriculumData.education_training = sortByDate(curriculumData.education_training, "date_start", 'dd.MM.YYYY');
    return curriculumData;
  }

  //Getters & Setters



}
