import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'candidatos',
    loadChildren: () => import('./candidatos/candidatos.module').then( m => m.CandidatosPageModule)
  },
  {
    path: 'voto',
    loadChildren: () => import('./voto/voto.module').then( m => m.VotoPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./voto/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./voto/categorias/categorias.module').then( m => m.CategoriasPageModule)
  }
  ,
  {
    path: 'resumen',
    loadChildren: () => import('./voto/resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'Verificar Voto',
    loadChildren: () => import('./verificar-voto/verificar-voto.module').then( m => m.VerificarVotoPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
