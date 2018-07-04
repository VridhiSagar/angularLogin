import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RegisterSubmitService } from '../register-submit.service';

@Component({
  selector: 'app-rg-forms-password',
  templateUrl: './rg-forms-password.component.html',
  styleUrls: ['./rg-forms-password.component.css']
})
export class RgFormsPasswordComponent implements OnInit {
passwordInfo: FormGroup;
  constructor(private frnbuilder: FormBuilder) {
    this.passwordInfo = frnbuilder.group({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.compose([Validators.required ,
                                                               Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]))

    }, this.passwordMatchValidator);
  }
  passwordMatchValidator(g: FormGroup) {
//     return g.get('password').value === g.get('passwordConfirm').value
//        ? null : {'mismatch': true};
if (!g.get('password') || !g.get('confirmPassword')) {
  return null;
}

if (!g.get('password').value === !g.get('confirmPassword').value ) {
  return null;
}
// tslint:disable-next-line:no-unused-expression
return {mismatch: true};
}
  ngOnInit() {
  }

}
