import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarEmpresasPageRoutingModule } from './registrar-empresas-routing.module';

import { RegistrarEmpresasPage } from './registrar-empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarEmpresasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarEmpresasPage]
})
export class RegistrarEmpresasPageModule {}
