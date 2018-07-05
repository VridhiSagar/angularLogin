import { Component, OnInit } from '@angular/core';
import {Register} from '../registerUser';
import { Router } from '@angular/router';
import { RgFormsUsernameComponent } from '../rg-forms-username/rg-forms-username.component';
import { RgFormsPersonalComponent } from '../rg-forms-personal/rg-forms-personal.component';
import { RgFormsPasswordComponent } from '../rg-forms-password/rg-forms-password.component';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: Register = new Register();
registerForm: FormGroup;
  constructor(private router: Router, private frmbuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForms();
  }
  register( ) {
    localStorage.setItem ('userInfo', JSON.stringify(this.model) );
    this.router.navigate(['/login']);
    console.log(this.model.password);

  }
  backToLogin() {
    this.router.navigate(['/login']);
  }
   buildForms() {
   this.registerForm = this.frmbuilder.group({
     username: RgFormsUsernameComponent.buildForm(),
     personal: RgFormsPersonalComponent.buildForm(),
     password: RgFormsPasswordComponent.buildForm()
   });
}



}
