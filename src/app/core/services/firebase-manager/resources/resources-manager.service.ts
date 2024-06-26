import { Injectable } from '@angular/core';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection, deleteDoc, getDoc, runTransaction, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { I18nService } from '../../i18n/i18n.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { OthersManagerService } from '../others/others-manager.service';
import { ActionStatus } from 'src/app/core/models/interfaces/action-status';
import { Category } from 'src/app/core/models/interfaces/category';
import { RegisterRow } from 'src/app/core/models/interfaces/register';
import { REGISTER_ACTIONS, REGISTER_TYPES } from 'src/app/core/models/utils/constants';
import { Resource } from 'src/app/core/models/interfaces/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesManagerService {
  private readonly unknownError: ActionStatus = {
    status: false,
    message: {
      title: this.i18s.getValue("resources.edit-resource.delete.error.title"),
      body: this.i18s.getValue("resources.edit-resource.delete.error.title"),
      type: "error"
    }
  };


  constructor(private om: OthersManagerService, private i18s: I18nService,
    private firestore: Firestore, private authf: AuthenticationService) { }

  public getResources(lang?: string): Observable<Resource[]> {
    let language = (lang) ? lang : this.i18s.lang;
    let resourcesRef = collection(this.firestore, `resources/${language}/data`);
    return collectionData(resourcesRef, { idField: 'id' }) as Observable<Resource[]>;
  }

  public getResourcesCategories(): Observable<Category[]> {
    let resourcesRef = collection(this.firestore, `resources/${this.i18s.lang}/categories`);
    return collectionData(resourcesRef, { idField: 'id' }) as Observable<Category[]>;
  }


  async addResource(data: any, lang: string, mode: number = 0): Promise<ActionStatus> {
    if (this.isLogged) {
      let id = (data.id) ? data.id : data.name;
      let typeMessage: string = (mode == 1) ? 'doc-edit' : 'success';
      let docSnap = await getDoc(doc(this.firestore, `resources/${lang}/data/${id}`));
      let register: RegisterRow = {
        timestamp: Timestamp.now(),
        user: this.authf.userEmail,
        type: REGISTER_TYPES.warning,
        action: (data.id) ? REGISTER_ACTIONS.modify : REGISTER_ACTIONS.create,
        referenceBefore: (docSnap.data()) ? docSnap.data() as Object : null,
        referenceAfter: data,
      }

      if (docSnap.data() && mode == 0) {
        return {
          status: false,
          message: {
            title: this.i18s.getValue("admin.resources.add.messages.doc-exists.title"),
            body: this.i18s.getValue("admin.resources.add.messages.doc-exists.body", { docId: id }),
            type: "error"
          }
        };
      } else {
        setDoc(doc(this.firestore, `resources/${lang}/data`, id), {
          category: data.category,
          description: data.description,
          img: data.img,
          name: data.name,
          url: data.url,
          highlighted: data.highlighted
        }).then(() => {
          this.om.registerAction(register);
        });

        return {
          status: true,
          message: {
            title: this.i18s.getValue(`admin.resources.add.messages.${typeMessage}.title`),
            body: this.i18s.getValue(`admin.resources.add.messages.${typeMessage}.body`, { lang: lang.toUpperCase(), docId: id }),
            type: "success"
          }
        };
      }

    }
    return { status: false }
  }

  public async deleteResource(value: any, lang: string): Promise<ActionStatus> {
    if (this.isLogged) {
      return await deleteDoc(doc(this.firestore, `resources/${lang}/data`, value.id)).then(() => {
        let register: RegisterRow = {
          timestamp: Timestamp.now(),
          user: this.authf.userEmail,
          type: REGISTER_TYPES.danger,
          action: REGISTER_ACTIONS.delete,
          referenceBefore: value,
          referenceAfter: null
        }
        this.om.registerAction(register);
        return {
          status: true,
          message: {
            title: this.i18s.getValue("resources.edit-resource.delete.success.title"),
            body: this.i18s.getValue("resources.edit-resource.delete.success.message"),
            type: "success"
          }
        };
      }).catch(() => { return this.unknownError; });
    }
    return this.unknownError;
  }

  public async deleteAllLanguagesResources(value: any): Promise<ActionStatus> {
    if (this.isLogged) {
      const languagesAvailable = this.i18s.languages;
      return await runTransaction(this.firestore, async (transaction) => {
        for (let i = 0; i < languagesAvailable.length; i++) {
          const docRef = doc(this.firestore, `resources/${languagesAvailable[i].id}/data`, value.id);
          transaction.delete(docRef);
        }
      }).then(() => {
        let register: RegisterRow = {
          timestamp: Timestamp.now(),
          user: this.authf.userEmail,
          type: REGISTER_TYPES.danger,
          action: REGISTER_ACTIONS.delete,
          referenceBefore: value,
          referenceAfter: null
        }
        this.om.registerAction(register);
        return {
          status: true,
          message: {
            title: this.i18s.getValue("admin.resources.delete.messages.delete-all.title"),
            body: this.i18s.getValue("admin.resources.delete.messages.delete-all.message"),
            type: "success"
          }
        };
      }).catch(() => { return this.unknownError; });
    }
    return this.unknownError;
  }


  public highlightResource(r: Resource, lang: string) {
    if (this.isLogged) {
      updateDoc(doc(this.firestore, `resources/${lang}/data`, r.id), {
        highlighted: !r.highlighted
      });
    }
  }



  // Getter & Setters
  protected get isLogged(): boolean {
    return this.authf.isLogged;
  }
}
