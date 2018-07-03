import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

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
      confirmPassword: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
  }

}
