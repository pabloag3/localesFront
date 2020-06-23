import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ClasificacionEmpresa } from '../models/ClasificacionEmpresa';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionEmpresasService {

  constructor(
    private httpService: HttpService,
  ) { }

  listarClasificacionEmpresas(): Observable<ClasificacionEmpresa> {
    return this.httpService.get<ClasificacionEmpresa>('clasificacionEmpresas/');
  }

  traerClasificacionEmpresa(id): Observable<ClasificacionEmpresa> {
    return this.httpService.get<ClasificacionEmpresa>('clasificacionEmpresas/' + id + '/');
  }

}
