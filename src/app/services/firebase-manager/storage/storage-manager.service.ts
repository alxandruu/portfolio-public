import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor() { }
  
  retrieveURLImageFromStorage(imagePath: string): Promise<string> {
    const storage = getStorage();
    return getDownloadURL(ref(storage, `images/${imagePath}`));
  }
}
