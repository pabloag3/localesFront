import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEmpresasPageRoutingModule } from './editar-empresas-routing.module';

import { EditarEmpresasPage } from './editar-empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEmpresasPageRoutingModule
  ],
  declarations: [EditarEmpresasPage]
})
export class EditarEmpresasPageModule {}
