import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user: string;
  check: boolean;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
   this.user = sessionStorage.getItem('auth');
    this.check = true;
  }


}
