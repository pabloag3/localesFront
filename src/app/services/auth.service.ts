import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthConstants } from '../auth-constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  login(postData: any): Observable<any> {
    return this.httpService.post('login/', postData);
  }

  registrar_usuario(postData: any): Observable<any> {
    return this.httpService.post('profile/', postData);
  }

  logout() {
    this.localStorageService.removeStorageItem(AuthConstants.AUTH)
    this.router.navigate(['/login']);
  }
}