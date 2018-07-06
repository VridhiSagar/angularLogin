import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RegisterSubmitService } from '../register-submit.service';

@Component({
  selector: 'app-rg-forms-personal',
  templateUrl: './rg-forms-personal.component.html',
  styleUrls: ['./rg-forms-personal.component.css']
})
export class RgFormsPersonalComponent implements OnInit {
  @Input() personal: FormGroup;

  constructor(private frmbuilder: FormBuilder) {

  }
  public static buildForm() {
   return new FormGroup ({
    dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.compose([Validators.required,
                                          Validators.maxLength(10),
                                          Validators.minLength(10)]))
    });
  }

  ngOnInit() {
  }

}
