import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarEmpresasPage } from './registrar-empresas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarEmpresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarEmpresasPageRoutingModule {}
