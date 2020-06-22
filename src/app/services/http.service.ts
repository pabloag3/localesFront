import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private aux: any;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  post<T>(serviceName: string, data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let authorizationToken = this.localStorageService.get(AuthConstants.AUTH);

    if (authorizationToken !== null) {
      headers = headers.append('Authorization', 'Token ' + authorizationToken);
    }

    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    return this.http.post<T>(url, JSON.stringify(data), options);
  }

  get<T>(serviceName: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let authorizationToken = this.localStorageService.get(AuthConstants.AUTH);

    if (authorizationToken !== null) {
      headers = headers.append('Authorization', 'Token ' + authorizationToken);
    }

    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    return this.http.get<T>(url, options);
  }

  put(serviceName: string, data: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let authorizationToken = this.localStorageService.get(AuthConstants.AUTH);

    if (authorizationToken !== null) {
      headers = headers.append('Authorization', 'Token ' + authorizationToken);
    }

    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    return this.http.put(url, JSON.stringify(data), options);
  }

  delete(serviceName: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let authorizationToken = this.localStorageService.get(AuthConstants.AUTH);

    if (authorizationToken !== null) {
      headers = headers.append('Authorization', 'Token ' + authorizationToken);
    }

    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    return this.http.delete(url, options);
  }

}
