import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-rg-forms-username',
  templateUrl: './rg-forms-username.component.html',
  styleUrls: ['./rg-forms-username.component.css']
})
export class RgFormsUsernameComponent implements OnInit {
  username: FormGroup;


  account_validation_messages = {
    'firstname': [
      { type: 'required', message: 'Username is required' },
    ],
    'lastname': [
      { type: 'required', message: 'Username is required' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  };
  constructor(private frmbuilder: FormBuilder) {

    this.username = frmbuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }

  ngOnInit() {
  }

}
