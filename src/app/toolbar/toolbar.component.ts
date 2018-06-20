import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'

import {Router}from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  isLoggedIn(){
    
  }

  logout(){
    console.log("hi")
    this.auth.logout();
    this.router.navigate(['/login'])

  }



}
