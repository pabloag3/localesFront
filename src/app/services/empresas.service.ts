import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(
    private httpService: HttpService,
  ) { }

  listarEmpresas(): Observable<any> {
    return this.httpService.get('empresas/');
  }
  
  traerEmpresa(id): Observable<any> {
    return this.httpService.get('empresas/' + id + '/');
  }

  registrarEmpresa(postData: any): Observable<any> {
    return this.httpService.post('empresas/', postData);
  }

}
