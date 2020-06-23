import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EmpresasMedidasService } from "../../services/empresas-medidas.service";

@Injectable()
export class EditarMedidasResolve implements Resolve<any> {

  constructor(
    private empresasService: EmpresasMedidasService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    return this.empresasService.traerMedidasDeEmpresa(route.params['dataId']);
  }
}  