import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashPage } from './hash.page';

const routes: Routes = [
  {
    path: '',
    component: HashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HashPageRoutingModule {}
