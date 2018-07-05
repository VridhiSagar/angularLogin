import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { RegisterSubmitService } from '../register-submit.service';

@Component({
  selector: 'app-rg-forms-password',
  templateUrl: './rg-forms-password.component.html',
  styleUrls: ['./rg-forms-password.component.css']
})
export class RgFormsPasswordComponent implements OnInit {
passwordInfo: FormGroup;

  constructor(private frmbuilder: FormBuilder) { }
  public static buildForm() {
    return new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.compose([Validators.required ,
                                       Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]))},
                                       {Validator: this.passwordMatchValidator}
                                      );
  }

  passwordMatchValidator(control: AbstractControl): {mismatch: boolean}  {

                  // if (!control.get('password') || !control.get('confirmPassword')) {
                  //   return null;
                  // }

                  if (control.get('password').value !== control.get('confirmPassword').value ) {
                    return {mismatch: true};
                  }
                   }




  ngOnInit() {
  }

}
