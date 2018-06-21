import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, private login: LoginService) { }

  @Input() check: boolean;
  @Input() isLoggedIn: string;
  ngOnInit() {}

  logout() {
    console.log('hi');
    this.auth.logout();
    this.router.navigate(['/login'] );

  }

}
