import { Component, OnInit } from '@angular/core';
import {Register} from '../registerUser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: Register = new Register();
  constructor() { }

  ngOnInit() {
  }
  register( ) {
    localStorage.setItem ('userInfo', JSON.stringify(this.model) );

  }
}
