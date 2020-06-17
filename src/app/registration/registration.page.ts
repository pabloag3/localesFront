import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formRegistrar: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.formRegistrar = this.formBuilder.group({
      first_name: new FormControl('', [Validators.required, Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,30}$')]), //solo letras y vocales con acento
      last_name: new FormControl('', [Validators.pattern('[/a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,30}$')]), //solo letras y vocales con acento
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  registrar() {

    let datos = {
      "first_name": this.formRegistrar.get('first_name').value,
      "last_name": this.formRegistrar.get('last_name').value,
      "email": this.formRegistrar.get('email').value.toLowerCase(),
      "password": this.formRegistrar.get('password').value
    }

    this.authService.registrar_usuario(datos).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
