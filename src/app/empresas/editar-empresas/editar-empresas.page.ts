import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClasificacionEmpresasService } from '../../services/clasificacion-empresas.service';
import { ClasificacionEmpresa } from '../../models/ClasificacionEmpresa';
import { EmpresasService } from '../../services/empresas.service';
import { Empresa } from '../../models/Empresa';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { EmpresasMedidasService } from 'src/app/services/empresas-medidas.service';
import { EmpresasMedidas } from 'src/app/models/EmpresasMedidas';
import { MedidaSanitaria } from 'src/app/models/MedidaSanitaria';

@Component({
  selector: 'app-editar-empresas',
  templateUrl: './editar-empresas.page.html',
  styleUrls: ['./editar-empresas.page.scss'],
})
export class EditarEmpresasPage implements OnInit {

  formEditarEmpresa: FormGroup;
  public clasificacionEmpresas$: ClasificacionEmpresa[];
  private empresaDatos: Empresa;
  private medidasSanitariasDeEmpresa$: EmpresasMedidas[];
  private idRestauranteAux: number;
  private selectedIdCategoria;
  private medidasSanitariasAux: MedidaSanitaria[];

  constructor(
    public formBuilder: FormBuilder,
    private clasificacionEmpresasService: ClasificacionEmpresasService,
    private empresasService: EmpresasService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
    private empresasMedidasService: EmpresasMedidasService,
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

    
    this.getDatosEmpresa();
    
  }

  editarEmpresa() {

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
        this.idRestauranteAux = data.id_empresa;

        this.eliminarMedidasSanitariasExistentes();

        this.registrarMedidasSanitarias();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  eliminarMedidasSanitariasExistentes() {
    this.medidasSanitariasDeEmpresa$ = this.localStorageService.get('medidasSanitariasDeEmpresa');

    // elimina las medidas sanitarias existentes de la empresa
    this.medidasSanitariasDeEmpresa$.forEach(element => {
      this.empresasMedidasService.eliminarEmpresaMedidaSanitaria(element.cod_empresa_medida).subscribe(
        (data) => {
          console.log("medidas iniciales eliminadas");
        },
        (error) => {
          console.log(error);
        }
      )
    });
  }

  registrarMedidasSanitarias() {
    this.medidasSanitariasAux = this.localStorageService.get('medidasSanitariasSeleccionadasEdicion');
    console.log(this.medidasSanitariasAux);

    this.medidasSanitariasAux.forEach(medidaSanitaria => {

      this.empresasMedidasService.registrarEmpresaMedidaSanitaria(
        {
          "id_medida_sanitaria": medidaSanitaria.id_medida_sanitaria,
          "id_empresa": this.idRestauranteAux
        }
      ).subscribe(
        (data) => {
          console.log(data);
          // eliminar datos auxiliares temporales de localStorage
          this.localStorageService.removeStorageItem('medidasSanitariasSeleccionadasRegistro');
        },
        (error) => {
          console.log(error)
        }
      );
      
    });

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
  }

  private verMedidasDeEmpresa() {
    this.router.navigate(['editar-medidas/' + this.empresaDatos.id_empresa]);
  }

}
