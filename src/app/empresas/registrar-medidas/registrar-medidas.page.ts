import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedidaSanitaria } from 'src/app/models/MedidaSanitaria';
import { Location } from '@angular/common';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-registrar-medidas',
  templateUrl: './registrar-medidas.page.html',
  styleUrls: ['./registrar-medidas.page.scss'],
})
export class RegistrarMedidasPage implements OnInit {

  private listaMedidasSanitarias$: MedidaSanitaria[];
  private selectedArray: any = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private location: Location,
  ) { }

  ngOnInit() {

    this.getMedidasSanitarias();

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
    this.localStorageService.store('medidasSanitariasSeleccionadasRegistro', this.selectedArray);
    this.location.back();
  }

}
