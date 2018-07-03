import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-rg-forms-personal',
  templateUrl: './rg-forms-personal.component.html',
  styleUrls: ['./rg-forms-personal.component.css']
})
export class RgFormsPersonalComponent implements OnInit {
 personal: FormGroup;

  constructor(private frmbuilder: FormBuilder) {
    this.personal = frmbuilder.group({
DOB: new FormControl('', Validators.required),
gender: new FormControl('', Validators.required),
contact: new FormControl('', Validators.compose([Validators.required,
                                    Validators.maxLength(10),
                                    Validators.minLength(10)]))
    }) ;
  }

  ngOnInit() {
  }

}
