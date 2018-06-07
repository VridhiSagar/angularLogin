import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
class login {
  public email:string="";
  public password:string="";
}
import {ServerService} from '../server.service';
//import {DemoService} from '../demo-service/demo-service.component';
import {forkJoin} from 'rxjs'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {
  _ServerService: any;
  model:login=new login();
  //loading= false;
  public email:string="";
  public password:string="";
  final:string="LOGIN";
  constructor(private serv:ServerService  ) {}
   
  ngOnInit() {
    this.submit();
  }
  server(){
    this._ServerService.server().subscribe(
       data=>{ this.email=data}

    )}
  
  submit(){
    // console.log(this.model.email);
    // console.log(this.model.password);
    this._ServerService.submit().subscribe(
        data=>
        {
             this.server();
             return true;

        }



    )
   


  }
  
}
