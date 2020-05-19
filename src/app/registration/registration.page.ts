import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formRegistrar: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formRegistrar = this.formBuilder.group({
      nombres: new FormControl('', [Validators.required, Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,30}$')]), //solo letras y vocales con acento
      apellidos: new FormControl('', [Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,30}$')]), //solo letras y vocales con acento
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  registrar() {
    console.log("apreto el boton para registrar");
  }

}
