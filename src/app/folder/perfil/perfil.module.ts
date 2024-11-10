import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    PerfilPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
