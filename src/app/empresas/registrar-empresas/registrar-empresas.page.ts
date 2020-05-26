import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasificacionEmpresasService } from '../../services/clasificacion-empresas.service';
import { ClasificacionEmpresa } from '../../models/ClasificacionEmpresa';
import { EmpresasService } from '../../services/empresas.service'

@Component({
  selector: 'app-registrar-empresas',
  templateUrl: './registrar-empresas.page.html',
  styleUrls: ['./registrar-empresas.page.scss'],
})
export class RegistrarEmpresasPage implements OnInit {

  formRegistrarEmpresa: FormGroup;
  public clasificacionEmpresas$: ClasificacionEmpresa[];
  public selectClasificacionEmpresas: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private clasificacionEmpresasService: ClasificacionEmpresasService,
    private empresasService: EmpresasService,
  ) { }

  ngOnInit() {

    this.formRegistrarEmpresa = this.formBuilder.group({
      descripcion: new FormControl('', [Validators.required, Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,50}$')]), //solo letras y numeros
      direccion: new FormControl('', [Validators.required, Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,300}$')]), //solo letras y numeros
      longitud: new FormControl('', [Validators.required]),
      latitud: new FormControl('', [Validators.required]),
      id_clasificacion_empresa: new FormControl('0', [Validators.required])
    })

    this.getAllClasificacionEmpresas();

  }

  registrarEmpresa() {
    let datos = {
      "descripcion": this.formRegistrarEmpresa.get('descripcion').value,
      "direccion": this.formRegistrarEmpresa.get('direccion').value,
      "longitud": this.formRegistrarEmpresa.get('longitud').value,
      "latitud": this.formRegistrarEmpresa.get('latitud').value,
      "id_clasificacion_empresa": this.formRegistrarEmpresa.get('id_clasificacion_empresa').value,
    }

    this.empresasService.registrarEmpresa(datos).subscribe(
      (data) => {
        console.log("Se ha guardado la empresa con exito");
      },
      (error) => {
        console.log(error);
      }
    );

  }

  private getAllClasificacionEmpresas() {
    this.clasificacionEmpresasService.listarClasificacionEmpresas().subscribe(
      (data: any) => {
        this.clasificacionEmpresas$ = data;
      },
      (error:any) => {
        console.log(error.message);
      }
    );
  }

}
