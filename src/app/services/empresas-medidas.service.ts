import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasMedidasService {

  constructor(
    private httpService: HttpService,
  ) { }

  listarMedidas(): Observable<any> {
    return this.httpService.get('empresaMedidas/');
  }

  traerMedidasDeEmpresa(id: number): Observable<any> {
    return this.httpService.get('empresaMedidas/?search=' + id);
  }

  registrarMedidaSanitaria(postData: any): Observable<any> {
    return this.httpService.post('empresaMedidas/', postData);
  }

  eliminarMedidaSanitaria(deleteDataId: number): Observable<any> {
    return this.httpService.delete('empresaMedidas/' + deleteDataId + '/');
  }

}
