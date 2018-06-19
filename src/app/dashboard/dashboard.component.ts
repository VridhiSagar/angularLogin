import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'

import {Router}from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user:string;
  constructor(private auth:AuthenticationService,private router:Router) { }
  
  ngOnInit() {
   this.user=sessionStorage.getItem("auth");
   
  }
  logout(){
    console.log("hi")
    this.auth.logout();
    this.router.navigate(['/login'])

  }

}
