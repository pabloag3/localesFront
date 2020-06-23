import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMedidasDeEmpresaPageRoutingModule } from './ver-medidas-de-empresa-routing.module';

import { VerMedidasDeEmpresaPage } from './ver-medidas-de-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMedidasDeEmpresaPageRoutingModule
  ],
  declarations: [VerMedidasDeEmpresaPage]
})
export class VerMedidasDeEmpresaPageModule {}
