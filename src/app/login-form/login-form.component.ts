import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

import {HttpClient} from "@angular/common/http";
import {users}  from '../users';
import {LoginService} from '../login.service';
import {forkJoin} from 'rxjs'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private user:users[]=[];
  model:users=new users()
  message:string=""
  clicked:boolean=false
  constructor(private _login:LoginService) {
  }  
   
  ngOnInit() { }
 
  submit(){
  
   this.clicked=true;
   this._login.getUser().subscribe(
  (data:users[])=>this.user=data );
  // console.log("you are successfully logged in");
  // this.message="You are successfully logged in";
  console.log(this.user)

  }
  
}
