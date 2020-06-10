import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

  // Store the value
  store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    this.storage.set(
      storageKey,
      encryptedValue
    );
  }

  // Get the value
  get(storageKey: string) {
    const ret = this.storage.get(storageKey);
    return JSON.parse(unescape(atob(ret)));
  }

  removeStorageItem(storageKey: string) {
    this.storage.remove(storageKey);
  }

  // Clear storage
  clear() {
    this.storage.clear();
  }

}
