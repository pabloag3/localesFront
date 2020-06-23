import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasMedidas } from '../../models/EmpresasMedidas';
import { MedidaSanitaria } from 'src/app/models/MedidaSanitaria';
import { Location } from '@angular/common';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-editar-medidas',
  templateUrl: './editar-medidas.page.html',
  styleUrls: ['./editar-medidas.page.scss'],
})
export class EditarMedidasPage implements OnInit {

  private medidasSanitariasDeEmpresa$: EmpresasMedidas[];
  private listaMedidasSanitarias$: MedidaSanitaria[];
  private selectedArray: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private location: Location,
  ) { }

  ngOnInit() {

    this.getMedidasDeEmpresa();
    this.getMedidasSanitarias();

    this.medidasSanitariasDeEmpresa$.forEach(medidaSanitariaDeEmpresa => {
      this.listaMedidasSanitarias$.forEach(medidaEnLista => {
        if (medidaSanitariaDeEmpresa.id_medida_sanitaria == medidaEnLista.id_medida_sanitaria) {
          medidaEnLista.isChecked = true;
        }
      })
    });

    this.localStorageService.store('medidasSanitariasDeEmpresa', this.medidasSanitariasDeEmpresa$);

  }

  private getMedidasSanitarias() {
    this.activatedRoute.data.subscribe(
      (data) => {
        this.listaMedidasSanitarias$ = data.medidas;
        this.listaMedidasSanitarias$.forEach(element => {
          element.isChecked = false;
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  private getMedidasDeEmpresa() {
    this.activatedRoute.data.subscribe(
      (data: any) => {
        this.medidasSanitariasDeEmpresa$ = data.medidasDeEmpresa;
      }
    )
  }

  private selectMedida(medidaSanitaria) {
    if (medidaSanitaria.isChecked == true) {
      this.selectedArray.push(medidaSanitaria);
    } else {
      let newArray = this.selectedArray.filter(function (el) {
        return el.id_medida_sanitaria !== medidaSanitaria.id_medida_sanitaria;
      });
      this.selectedArray = newArray;
    }
  }

  private guardarMedidasEnLocalStorage() {
    this.localStorageService.store('medidasSanitariasSeleccionadasEdicion', this.selectedArray);
    this.location.back();
  }

}
