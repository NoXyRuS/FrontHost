import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/login',  // Redirige desde la raíz a /folder/login
    pathMatch: 'full'
  },
  {
    path: 'folder/login',         // Carga el módulo de login cuando se accede a /folder/login
    loadChildren: () => import('./folder/login/login.module').then(m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/:id/perfil',
    loadChildren: () => import('./folder/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'folder/:id/candidatos',
    loadChildren: () => import('./folder/candidatos/candidatos.module').then(m => m.CandidatosPageModule)
  },
  {
    path: 'folder/:id/voto',
    loadChildren: () => import('./folder/voto/voto.module').then(m => m.VotoPageModule)
  },
  {
    path: 'folder/:id/voto/verificacion',
    loadChildren: () => import('./folder/voto/verificacion/verificacion.module').then(m => m.VerificacionPageModule)
  },
  {
    path: 'folder/:id/voto/categorias',
    loadChildren: () => import('./folder/voto/categorias/categorias.module').then(m => m.CategoriasPageModule)
  },
  {
    path: 'folder/:id/voto/resumen',
    loadChildren: () => import('./folder/voto/resumen/resumen.module').then(m => m.ResumenPageModule)
  },
  {
    path: 'folder/:id/verificar-voto',
    loadChildren: () => import('./folder/verificar-voto/verificar-voto.module').then(m => m.VerificarVotoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
