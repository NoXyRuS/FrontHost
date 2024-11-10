import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HashPageRoutingModule } from './hash-routing.module';

import { HashPage } from './hash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HashPageRoutingModule
  ],
  declarations: [HashPage]
})
export class HashPageModule {}
