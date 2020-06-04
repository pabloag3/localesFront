import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../auth-constants'
import { ClasificacionEmpresa } from '../models/ClasificacionEmpresa'

@Injectable({
  providedIn: 'root'
})
export class ClasificacionEmpresasService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  listarClasificacionEmpresas(): Observable<any> {
    return this.httpService.get('clasificacionEmpresas/');
  }

  traerClasificacionEmpresa(id): Observable<any> {
    return this.httpService.get('clasificacionEmpresas/' + id + '/');
  }

}
