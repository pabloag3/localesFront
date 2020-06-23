import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { VerEmpresaResolve } from './empresas/ver-empresa/ver-empresa.resolve';
import { EditarEmpresaResolve } from './empresas/editar-empresas/editar-empresas.resolve';
import { ListarEmpresasResolve } from './empresas/listar-empresas/listar-empresas.resolve'
import { VerMedidasDeEmpresaResolve } from './empresas/ver-medidas-de-empresa/ver-medidas-de-empresa.resolve'
import { RegistrarMedidasResolve } from './empresas/registrar-medidas/registrar-medidas.resolve';
import { EditarMedidasResolve } from './empresas/editar-medidas/editar-medidas.resolve';

import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    VerEmpresaResolve,
    EditarEmpresaResolve,
    ListarEmpresasResolve,
    VerMedidasDeEmpresaResolve,
    RegistrarMedidasResolve,
    EditarMedidasResolve,
    StorageServiceModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
