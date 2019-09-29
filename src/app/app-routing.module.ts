import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'eleccion-n', loadChildren: () => import('./eleccion-n/eleccion-n.module').then( m => m.EleccionNPageModule)},
  { path: 'eleccion', loadChildren: () => import('./eleccion/eleccion.module').then( m => m.EleccionPageModule)},  { path: 'u8', loadChildren: './u8/u8.module#U8PageModule' },
  { path: 'registrarse', loadChildren: './registrarse/registrarse.module#RegistrarsePageModule' },
  { path: 'iniciar', loadChildren: './iniciar/iniciar.module#IniciarPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
