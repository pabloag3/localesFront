import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthConstants } from '../config/auth-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    this.formLogin = this.formBuilder.group({
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  iniciar_sesion() {

    let credenciales = {
      "username": this.formLogin.get('email').value,
      "password": this.formLogin.get('password').value
    }

    this.authService.login(credenciales).subscribe(
      (data: any) => {
        this.localStorageService.store(AuthConstants.AUTH, data.token);
      },
      (error: any) => {
        console.log(error.message);
      }
    );

  }

}
