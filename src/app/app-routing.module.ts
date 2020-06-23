import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditarEmpresaResolve } from './empresas/editar-empresas/editar-empresas.resolve';
import { VerEmpresaResolve } from './empresas/ver-empresa/ver-empresa.resolve';
import { ListarEmpresasResolve } from './empresas/listar-empresas/listar-empresas.resolve';
import { VerMedidasDeEmpresaResolve } from './empresas/ver-medidas-de-empresa/ver-medidas-de-empresa.resolve';
import { RegistrarMedidasResolve } from './empresas/registrar-medidas/registrar-medidas.resolve';
import { EditarMedidasResolve } from './empresas/editar-medidas/editar-medidas.resolve';

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
  },
  {
    path: 'registrar-empresas',
    loadChildren: () => import('./empresas/registrar-empresas/registrar-empresas.module').then( m => m.RegistrarEmpresasPageModule)
  },
  {
    path: 'editar-empresas/:dataId',
    loadChildren: () => import('./empresas/editar-empresas/editar-empresas.module').then( m => m.EditarEmpresasPageModule),
    resolve: {
      empresa: EditarEmpresaResolve
    }
  },
  {
    path: 'listar-empresas',
    loadChildren: () => import('./empresas/listar-empresas/listar-empresas.module').then( m => m.ListarEmpresasPageModule),
    resolve: {
      empresas: ListarEmpresasResolve
    }
  },
  {
    path: 'ver-empresa/:dataId',
    loadChildren: () => import('./empresas/ver-empresa/ver-empresa.module').then( m => m.VerEmpresaPageModule),
    resolve: {
      empresa: VerEmpresaResolve
    }
  },
  {
    path: 'registrar-medidas',
    loadChildren: () => import('./empresas/registrar-medidas/registrar-medidas.module').then( m => m.RegistrarMedidasPageModule),
    resolve: {
      medidas: RegistrarMedidasResolve
    }
  },
  {
    path: 'editar-medidas/:dataId',
    loadChildren: () => import('./empresas/editar-medidas/editar-medidas.module').then( m => m.EditarMedidasPageModule),
    resolve: {
      medidasDeEmpresa: EditarMedidasResolve,
      medidas: RegistrarMedidasResolve
    }
  },
  {
    path: 'ver-medidas-de-empresa/:dataId',
    loadChildren: () => import('./empresas/ver-medidas-de-empresa/ver-medidas-de-empresa.module').then( m => m.VerMedidasDeEmpresaPageModule),
    resolve: {
      medidasDeEmpresa: VerMedidasDeEmpresaResolve
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
