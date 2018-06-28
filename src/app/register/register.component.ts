import { Component, OnInit } from '@angular/core';
import {Register} from '../registerUser';
import { Router } from '@angular/router';
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
  }
  backToLogin() {
    this.router.navigate(['/login']);
  }
}
