import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEmpresaPageRoutingModule } from './ver-empresa-routing.module';

import { VerEmpresaPage } from './ver-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEmpresaPageRoutingModule
  ],
  declarations: [VerEmpresaPage]
})
export class VerEmpresaPageModule {}
