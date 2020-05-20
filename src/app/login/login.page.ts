import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';;
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
    private storageService: StorageService
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
        // console.log("token de acceso: " + data.token);
        this.storageService.store(AuthConstants.AUTH, data.token);
        // console.log(this.storageService.get(AuthConstants.AUTH));
      },
      (error: any) => {
        console.log(error.message);
      }
    );

  }

}
