import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMedidasPage } from './editar-medidas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMedidasPageRoutingModule {}
