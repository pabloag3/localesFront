import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Empresa } from '../models/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(
    private httpService: HttpService,
  ) { }

  listarEmpresas(): Observable<Empresa> {
    return this.httpService.get<Empresa>('empresas/');
  }
  
  traerEmpresa(id): Observable<Empresa> {
    return this.httpService.get<Empresa>('empresas/' + id + '/');
  }

  registrarEmpresa(postData: any): Observable<Empresa> {
    return this.httpService.post<Empresa>('empresas/', postData);
  }

  editarEmpresa(putData: any): Observable<any> {
    return this.httpService.put('empresas/' + putData.id_empresa + '/', putData);
  }

}
