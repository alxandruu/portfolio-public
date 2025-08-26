import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { I18nService } from '../i18n/i18n.service';
import { CurriculumVitae, CurriculumVitaeV2 } from 'src/app/core/types/curriculum-vitae.interface';
import { HomeProfile } from 'src/app/core/types/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private firestore = inject(Firestore)
  private i18s = inject(I18nService)
  
  async requestProfile(): Promise<HomeProfile> {
    const userinfoRef = doc(this.firestore, `${this.i18s.lang}/user-profile`);
    const docSnap = await getDoc(userinfoRef);
    return docSnap.data() as HomeProfile;
  }

  async requestCurriculumVitae(): Promise<CurriculumVitaeV2> {
    const userinfoRef = doc(this.firestore, `curriculum-vitae/${this.i18s.lang}`);
    const docSnap = await getDoc(userinfoRef);
    return docSnap.data() as CurriculumVitaeV2;
  }

}
