import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EmpresasMedidasService } from "../../services/empresas-medidas.service";

@Injectable()
export class RegistrarMedidasResolve implements Resolve<any> {

  constructor(
    private empresasMedidasService: EmpresasMedidasService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    return this.empresasMedidasService.listarMedidas();
  }
}  