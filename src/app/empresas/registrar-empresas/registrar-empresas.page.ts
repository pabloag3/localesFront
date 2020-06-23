import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClasificacionEmpresasService } from '../../services/clasificacion-empresas.service';
import { ClasificacionEmpresa } from '../../models/ClasificacionEmpresa';
import { EmpresasService } from '../../services/empresas.service'
import { MedidaSanitaria } from 'src/app/models/MedidaSanitaria';
import { LocalStorageService } from '../../services/local-storage.service';
import { EmpresasMedidasService } from 'src/app/services/empresas-medidas.service';

@Component({
  selector: 'app-registrar-empresas',
  templateUrl: './registrar-empresas.page.html',
  styleUrls: ['./registrar-empresas.page.scss'],
})
export class RegistrarEmpresasPage implements OnInit {

  formRegistrarEmpresa: FormGroup;
  public clasificacionEmpresas$: ClasificacionEmpresa[];
  private idRestauranteAux: number;
  private medidasSanitariasAux: MedidaSanitaria[];

  constructor(
    public formBuilder: FormBuilder,
    private clasificacionEmpresasService: ClasificacionEmpresasService,
    private empresasService: EmpresasService,
    private localStorageService: LocalStorageService,
    private empresasMedidasService: EmpresasMedidasService,
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
        this.idRestauranteAux = data.id_empresa;
        this.registrarMedidasSanitarias();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  registrarMedidasSanitarias() {
    this.medidasSanitariasAux = this.localStorageService.get('medidasSanitariasSeleccionadasRegistro');

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
      },
      (error:any) => {
        console.log(error.message);
      }
    );
  }

}
