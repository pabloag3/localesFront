import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasMedidas } from '../../models/EmpresasMedidas';

@Component({
  selector: 'app-ver-medidas-de-empresa',
  templateUrl: './ver-medidas-de-empresa.page.html',
  styleUrls: ['./ver-medidas-de-empresa.page.scss'],
})
export class VerMedidasDeEmpresaPage implements OnInit {

  private medidasSanitarias$: EmpresasMedidas[];

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.getMedidasDeEmpresa();

  }

  private getMedidasDeEmpresa() {
    this.activatedRoute.data.subscribe(
      (data: any) => {
        this.medidasSanitarias$ = data.medidasDeEmpresa;
      }
    )
  }

}
