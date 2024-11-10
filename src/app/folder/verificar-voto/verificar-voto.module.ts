import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarVotoPageRoutingModule } from './verificar-voto-routing.module';

import { VerificarVotoPage } from './verificar-voto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarVotoPageRoutingModule
  ],
  declarations: [VerificarVotoPage]
})
export class VerificarVotoPageModule {}
