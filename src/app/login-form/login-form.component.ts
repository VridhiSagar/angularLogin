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
  private router:Router;

  constructor(private _login:LoginService,private auth:AuthenticationService) {
  }  
   
  ngOnInit() { }
 
  submit(){
  
   this._login.getUser().subscribe((data:users[])=>{
     this.user=data;
     console.log(this.user);
     
    } );
   
   localStorage.setItem("auth",this.model.email)
    //this.auth.storeData();
    this.router.navigate(['/dashboard']);

  
  }
 
     
}

