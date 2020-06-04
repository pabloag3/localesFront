import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarMedidasPageRoutingModule } from './registrar-medidas-routing.module';

import { RegistrarMedidasPage } from './registrar-medidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarMedidasPageRoutingModule
  ],
  declarations: [RegistrarMedidasPage]
})
export class RegistrarMedidasPageModule {}
