import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {users}  from '../users';
import {LoginService} from '../login.service';
import {AuthenticationService} from '../authentication.service' 


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private user:users[]=[];
  model:users=new users()
  message:string="";
 

  constructor(private _login:LoginService,private auth:AuthenticationService,private router:Router) {
  }  
   
  ngOnInit() { }
 
  submit(){
  
   this._login.getUser().subscribe((data:users[])=>{
     this.user=data;
     console.log(this.user);
    } );
   
   this.auth.loginIn(this.model.email);
    //this.auth.storeData();
    this.router.navigate(['/']);

  
  }
 
     
}

