import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, FirebaseStorage, getBlob } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  private storage: FirebaseStorage;
  constructor() {
    this.storage = getStorage();
  }

  retrieveURLImageFromStorage(imagePath: string): Promise<string> {
    return getDownloadURL(ref(this.storage, `images/${imagePath}`));
  }
  getFileAsBlob(path: string): Promise<Blob> {
    return getBlob(ref(this.storage, path));
  }
}
