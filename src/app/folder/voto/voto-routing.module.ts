import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotoPage } from './voto.page';

const routes: Routes = [
  {
    path: '',
    component: VotoPage
  },  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'hash',
    loadChildren: () => import('./hash/hash.module').then( m => m.HashPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotoPageRoutingModule {}
