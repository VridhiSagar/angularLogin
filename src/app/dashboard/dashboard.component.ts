import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user:string;
  constructor() { }
  
  ngOnInit() {
   this.user=localStorage.getItem("auth");

  }

}
