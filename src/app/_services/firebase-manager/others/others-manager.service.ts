import { Injectable } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, getDoc, orderBy, query } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { History, RegisterRow } from 'src/app/_models/history';
import { Profile } from 'src/app/_models/profile';
import { environment } from 'src/environments/environment';
import { I18nService } from '../../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class OthersManagerService {

  constructor(private firestore: Firestore, private i18s: I18nService) { }

  public async getProfileData(): Promise<Profile> {
    let profileRef = doc(this.firestore, `profile/${this.i18s.lang}`);
    const docSnap = await getDoc(profileRef);
    return docSnap.data() as Profile;
  }

  public getActionHistory(): Observable<History[]> {
    let actionHistoryRef = collection(this.firestore, `action-history`);
    let q = query(actionHistoryRef, orderBy("timestamp", "desc"));

    return collectionData(q, { idField: 'id' }) as Observable<History[]>;
  }

  public registerAction(register: RegisterRow): void {
    if (environment.production == true) {
      addDoc(collection(this.firestore, 'action-history'), register).catch(error => console.log(error));
    }
  }

}
