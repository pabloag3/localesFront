import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpresasService } from '../../services/empresas.service'
import { Empresa } from '../../models/Empresa';
import { Router } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-ver-empresa',
  templateUrl: './ver-empresa.page.html',
  styleUrls: ['./ver-empresa.page.scss'],
})
export class VerEmpresaPage implements OnInit {

  formVerEmpresa: FormGroup;
  private dataId;
  private empresaDatos: Empresa;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private launchNavigator: LaunchNavigator,
  ) { }

  ngOnInit() {
    
    this.dataId = this.activatedRoute.snapshot.paramMap.get('dataId');

    this.getDatosEmpresa();

    this.formVerEmpresa = this.formBuilder.group({
      id_empresa: new FormControl(''),
      descripcion: new FormControl(''),
      direccion: new FormControl(''),
      longitud: new FormControl(''),
      latitud: new FormControl(''),
      clasificacion_empresa: new FormControl(''),
    })
    
    this.preCompletarFormulario();

  }

  private getDatosEmpresa() {
    this.activatedRoute.data.subscribe(
      (data: any) => {
        this.empresaDatos = data.empresa;
      }
    )
  }

  private preCompletarFormulario() {
    this.formVerEmpresa.get('descripcion').setValue(this.empresaDatos.descripcion);
    this.formVerEmpresa.get('direccion').setValue(this.empresaDatos.direccion);
    this.formVerEmpresa.get('longitud').setValue(this.empresaDatos.longitud);
    this.formVerEmpresa.get('latitud').setValue(this.empresaDatos.latitud);
    this.formVerEmpresa.get('latitud').setValue(this.empresaDatos.latitud);
    this.formVerEmpresa.get('clasificacion_empresa').setValue(this.empresaDatos.clasificacion_empresa);
  }

  private verMedidasDeEmpresa() {
    this.router.navigate(['ver-medidas-de-empresa/' + this.empresaDatos.id_empresa]);
  }

  private abrirEnMapa() {

    let coordenadas = [];
    coordenadas.push(this.empresaDatos.latitud);
    coordenadas.push(this.empresaDatos.longitud);
    console.log(coordenadas);

    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }

    this.launchNavigator.navigate(coordenadas, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

}
