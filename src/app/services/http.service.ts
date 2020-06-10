import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private aux: any;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    // console.log(JSON.stringify(data));
    // console.log(url);
    return this.http.post(url, JSON.stringify(data), options);
  }

  get(serviceName: string) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.storageService.get(AuthConstants.AUTH)
      .then((value) => {
        // console.log("valor del promise: " + value); // ya captura bien el valor del token
        if (value !== null) {
          headers = headers.append('Authorization', 'Token ' + value);
        }
  
      });


    // console.log(headers);
    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, options);
  }

  put(serviceName: string, data: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = { headers: headers };
    const url = environment.apiUrl + serviceName;
    return this.http.put(url, JSON.stringify(data), options);
  }

}
