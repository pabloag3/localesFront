import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EmpresasService } from "../../services/empresas.service";

@Injectable()
export class EditarEmpresaResolve implements Resolve<any> {

  constructor(
    private empresasService: EmpresasService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    return this.empresasService.traerEmpresa(route.params['dataId']);
  }
}  