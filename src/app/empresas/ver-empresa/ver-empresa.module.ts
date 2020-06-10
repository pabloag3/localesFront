import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEmpresaPageRoutingModule } from './ver-empresa-routing.module';

import { VerEmpresaPage } from './ver-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEmpresaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [VerEmpresaPage]
})
export class VerEmpresaPageModule {}
