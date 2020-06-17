import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMedidasDeEmpresaPage } from './ver-medidas-de-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: VerMedidasDeEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMedidasDeEmpresaPageRoutingModule {}
