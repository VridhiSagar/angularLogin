import { Component, OnInit } from '@angular/core';
import { Register } from '../registerUser';
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
  constructor(private router: Router, private frmbuilder: FormBuilder) {

   }

  register( ) {
   // localStorage.setItem ('userInfo', JSON.stringify(this.model) );

    // console.log(this.model.password);
 const obj = {
  firstname: this.registerForm.value.usernameParent.firstname,
  lastname: this.registerForm.value.usernameParent.lastname,
  email: this.registerForm.value.usernameParent.email,
  dateOfBirth: this.registerForm.value.personalParent.dateOfBirth,
  gender: this.registerForm.value.personalParent.gender,
  contact: this.registerForm.value.personalParent.contact,
  password: this.registerForm.value.passwordParent.password,


 };
 console.log(this.registerForm.value.usernameParent.firstname);
 localStorage.setItem('userInfo', JSON.stringify(obj));
 this.router.navigate(['/login']);
  }
  backToLogin() {
   sessionStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

ngOnInit() {
  this.buildForms();
}
buildForms() {
  this.registerForm = this.frmbuilder.group({
    usernameParent: RgFormsUsernameComponent.buildForm(),
    personalParent: RgFormsPersonalComponent.buildForm(),
    passwordParent: RgFormsPasswordComponent.buildForm()
  });
 }
}
