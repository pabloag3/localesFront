import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { MedidaSanitaria } from '../models/MedidaSanitaria';
import { EmpresasMedidas } from '../models/EmpresasMedidas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasMedidasService {

  constructor(
    private httpService: HttpService,
  ) { }

  listarMedidas(): Observable<MedidaSanitaria> {
    return this.httpService.get<MedidaSanitaria>('medidasSanitarias/');
  }

  traerMedidasDeEmpresa(id: number): Observable<EmpresasMedidas> {
    return this.httpService.get<EmpresasMedidas>('empresaMedidas/?search=' + id);
  }

  registrarEmpresaMedidaSanitaria(postData: any): Observable<any> {
    return this.httpService.post('empresaMedidas/', postData);
  }

  eliminarEmpresaMedidaSanitaria(deleteDataId: number): Observable<any> {
    return this.httpService.delete('empresaMedidas/' + deleteDataId + '/');
  }

}
