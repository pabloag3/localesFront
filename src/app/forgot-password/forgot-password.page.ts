import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  formRecuperarContrasenha: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formRecuperarContrasenha = this.formBuilder.group({
      email:  new FormControl('', [Validators.required, Validators.email]),
    })
  }

  recuperarContrasenha(){
    console.log("Apreto el boton de enviar correo para recuperar contrasenha.");
  }

}
