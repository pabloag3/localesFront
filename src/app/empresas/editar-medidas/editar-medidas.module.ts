import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMedidasPageRoutingModule } from './editar-medidas-routing.module';

import { EditarMedidasPage } from './editar-medidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMedidasPageRoutingModule
  ],
  declarations: [EditarMedidasPage]
})
export class EditarMedidasPageModule {}
