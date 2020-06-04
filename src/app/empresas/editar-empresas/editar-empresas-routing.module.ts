import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEmpresasPage } from './editar-empresas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEmpresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEmpresasPageRoutingModule {}
