import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, Observable, of, take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  data = signal({});
  private configLoaded = new BehaviorSubject<boolean>(false);
  private timeCache = 60 * 60 * 1000; // 1 hour
  private NameConfigCache = 'cc_config'; // config cache name
  private NameConfigs = 'configs';

  constructor(private httpClient: HttpClient) {
    if (!this.isCacheExpired()) {
      const configCache = this.getDataStorage();
      if (configCache) {
        this.data.set(configCache || {});
      }
    } else {
      this.clearCache();
    }
  }

  getData(client: string | null) {
    if (!client) { return of(); }
    if (localStorage.getItem(this.NameConfigs) && !this.isCacheExpired()) {
      this.data.set(this.getDataStorage() || '{}');
      return of();
    }
    return this.httpClient.get(`/data/${client}.json`).pipe(
      tap((data: any) => {
        this.setDataStorage(data);
        this.setCache();
        this.configLoaded.next(true);
      })
    );
  }

  private setCache() {
    localStorage.setItem(this.NameConfigCache, JSON.stringify(new Date().setMilliseconds(this.timeCache)));
  }

  private setDataStorage(data: string) {
    this.data.set(data);
    localStorage.setItem(this.NameConfigs, btoa(JSON.stringify(data)));
  }

  getDataStorage() {
    const config = localStorage.getItem(this.NameConfigs);
    return config ? JSON.parse(atob(config)) : null;
  }

  private clearCache() {
    localStorage.removeItem(this.NameConfigs);
    localStorage.removeItem(this.NameConfigCache);
  }

  private isCacheExpired(): boolean {
    const storedConfig = localStorage.getItem(this.NameConfigCache);
    if (!storedConfig) {
      return true;
    }
    const currentTime = new Date().getTime();
    const configTime = new Date(storedConfig).getTime();
    return currentTime - configTime > this.timeCache;
  }

  waitForConfig(): Observable<boolean> {
    return this.configLoaded.asObservable().pipe(
      filter(loaded => loaded),
      take(1)
    );
  }
}