import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClasificacionEmpresasService } from '../../services/clasificacion-empresas.service';
import { ClasificacionEmpresa } from '../../models/ClasificacionEmpresa';
import { EmpresasService } from '../../services/empresas.service'
import { Empresa } from '../../models/Empresa';

@Component({
  selector: 'app-editar-empresas',
  templateUrl: './editar-empresas.page.html',
  styleUrls: ['./editar-empresas.page.scss'],
})
export class EditarEmpresasPage implements OnInit {

  formEditarEmpresa: FormGroup;
  public clasificacionEmpresas$: ClasificacionEmpresa[];
  private empresaDatos: Empresa;
  private selectedIdCategoria;
  private dataId;

  constructor(
    public formBuilder: FormBuilder,
    private clasificacionEmpresasService: ClasificacionEmpresasService,
    private empresasService: EmpresasService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.formEditarEmpresa = this.formBuilder.group({
      id_empresa: new FormControl(''),
      descripcion: new FormControl('', [Validators.required, Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,50}$')]), //solo letras y numeros
      direccion: new FormControl('', [Validators.required, Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,300}$')]), //solo letras y numeros
      longitud: new FormControl('', [Validators.required]),
      latitud: new FormControl('', [Validators.required]),
      id_clasificacion_empresa: new FormControl(),
    })

    this.dataId = this.activatedRoute.snapshot.paramMap.get('dataId');
    
    this.getDatosEmpresa();
    
  }

  editarEmpresa(dataId) {

    let datos = {
      "id_empresa": this.formEditarEmpresa.get('id_empresa').value,
      "descripcion": this.formEditarEmpresa.get('descripcion').value,
      "direccion": this.formEditarEmpresa.get('direccion').value,
      "longitud": this.formEditarEmpresa.get('longitud').value,
      "latitud": this.formEditarEmpresa.get('latitud').value,
      "id_clasificacion_empresa": this.formEditarEmpresa.get('id_clasificacion_empresa').value,
    }

    this.empresasService.editarEmpresa(datos).subscribe(
      (data) => {
        console.log("Se ha editado la empresa con exito");
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
        this.preCompletarFormulario();
      },
      (error: any) => {
        console.log(error.message);
      }
    );
  }

  private getDatosEmpresa() {

    this.activatedRoute.data.subscribe(
      (data: any) => {
        this.empresaDatos = data.empresa;
        this.getAllClasificacionEmpresas();
      }
    )

  }

  private preCompletarFormulario() {
    this.formEditarEmpresa.get('id_empresa').setValue(this.empresaDatos.id_empresa);
    this.formEditarEmpresa.get('descripcion').setValue(this.empresaDatos.descripcion);
    this.formEditarEmpresa.get('direccion').setValue(this.empresaDatos.direccion);
    this.formEditarEmpresa.get('longitud').setValue(this.empresaDatos.longitud);
    this.formEditarEmpresa.get('latitud').setValue(this.empresaDatos.latitud);
    this.formEditarEmpresa.get('latitud').setValue(this.empresaDatos.latitud);
    this.selectedIdCategoria = this.empresaDatos.id_clasificacion_empresa;
    // this.formEditarEmpresa.patchValue({id_clasificacion_empresa: this.selectedIdCategoria});
  }

}
