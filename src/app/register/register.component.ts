import { Component, OnInit } from '@angular/core';
import {Register} from '../registerUser';
import { Router } from '@angular/router';
import { RgFormsUsernameComponent } from '../rg-forms-username/rg-forms-username.component';
import { RgFormsPersonalComponent } from '../rg-forms-personal/rg-forms-personal.component';
import { RgFormsPasswordComponent } from '../rg-forms-password/rg-forms-password.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: Register = new Register();
  constructor(private router: Router) { }

  ngOnInit() {
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
   this.registerForm = this.Formbuilder.group({
     username: RgFormsUsernameComponent.buildForm(this.program),
     personal: RgFormsPersonalComponent.buildForm(this.program),
     password: RgFormsPasswordComponent.buildForm(this.program)
   });
}



}
