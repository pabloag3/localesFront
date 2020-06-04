import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerEmpresaPage } from './ver-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: VerEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerEmpresaPageRoutingModule {}
