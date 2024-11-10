import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarVotoPage } from './verificar-voto.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarVotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarVotoPageRoutingModule {}
