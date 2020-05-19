import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formLogin = this.formBuilder.group({
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  login() {
    console.log("apreto el boton para ingresar");
  }

}
