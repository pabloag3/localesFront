import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../../models/Empresa';
import { EmpresasService } from '../../services/empresas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.page.html',
  styleUrls: ['./listar-empresas.page.scss'],
})
export class ListarEmpresasPage implements OnInit {

  private listaEmpresas$: Empresa[];

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.getListaEmpresas();
    
  }

  private getListaEmpresas() {
    this.activatedRoute.data.subscribe(
      (data: any) => {
        this.listaEmpresas$ = data.empresas;
      }
    )
  }

  private redirectToVerEmpresa(empresa) {
    this.router.navigate(['ver-empresa/' + empresa.id_empresa]);
  }

}
