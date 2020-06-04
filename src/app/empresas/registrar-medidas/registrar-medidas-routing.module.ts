import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarMedidasPage } from './registrar-medidas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarMedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarMedidasPageRoutingModule {}
