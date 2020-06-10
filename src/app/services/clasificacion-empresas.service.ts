import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionEmpresasService {

  constructor(
    private httpService: HttpService,
  ) { }

  listarClasificacionEmpresas(): Observable<any> {
    return this.httpService.get('clasificacionEmpresas/');
  }

  traerClasificacionEmpresa(id): Observable<any> {
    return this.httpService.get('clasificacionEmpresas/' + id + '/');
  }

}
