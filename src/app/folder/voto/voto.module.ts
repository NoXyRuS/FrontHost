import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotoPageRoutingModule } from './voto-routing.module';

import { VotoPage } from './voto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotoPageRoutingModule
  ],
  declarations: [VotoPage]
})
export class VotoPageModule {}
