import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { CV } from 'src/app/_models/cv';
import { I18nService } from '../../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class CvManagerService {

  constructor(private firestore: Firestore, private i18s: I18nService) { }

  async getCVData(): Promise<CV> {
    let cvRef = doc(this.firestore, `cv/${this.i18s.lang}`);
    const docSnap = await getDoc(cvRef);
    return docSnap.data() as CV;
  }

  //Getters & Setters



}
