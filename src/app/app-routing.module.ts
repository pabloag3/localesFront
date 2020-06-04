import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },  {
    path: 'registrar-empresas',
    loadChildren: () => import('./empresas/registrar-empresas/registrar-empresas.module').then( m => m.RegistrarEmpresasPageModule)
  },
  {
    path: 'editar-empresas',
    loadChildren: () => import('./empresas/editar-empresas/editar-empresas.module').then( m => m.EditarEmpresasPageModule)
  },
  {
    path: 'listar-empresas',
    loadChildren: () => import('./empresas/listar-empresas/listar-empresas.module').then( m => m.ListarEmpresasPageModule)
  },
  {
    path: 'ver-empresa',
    loadChildren: () => import('./empresas/ver-empresa/ver-empresa.module').then( m => m.VerEmpresaPageModule)
  },
  {
    path: 'registrar-medidas',
    loadChildren: () => import('./empresas/registrar-medidas/registrar-medidas.module').then( m => m.RegistrarMedidasPageModule)
  },
  {
    path: 'editar-medidas',
    loadChildren: () => import('./empresas/editar-medidas/editar-medidas.module').then( m => m.EditarMedidasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
