import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { I18nService } from '../../i18n/i18n.service';
import { CurriculumVitae, CurriculumVitaeV2 } from 'src/app/core/types/curriculum-vitae.interface';
import { sortByDate } from 'src/app/core/models/utils/utilities';
import { HomeProfile } from 'src/app/core/types/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {


  constructor(private firestore: Firestore, private i18s: I18nService) { }

  async requestProfile(): Promise<HomeProfile> {
    const userinfoRef = doc(this.firestore, `home-profile/${this.i18s.lang}`);
    const docSnap = await getDoc(userinfoRef);
    return docSnap.data() as HomeProfile;
  }


  async requestCurriculumVitae(): Promise<CurriculumVitaeV2> {
    const userinfoRef = doc(this.firestore, `curriculum-vitae/${this.i18s.lang}`);
    const docSnap = await getDoc(userinfoRef);
    return docSnap.data() as CurriculumVitaeV2;
  }

}
