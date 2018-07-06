import { Component } from '@angular/core';
import { RgFormsUsernameComponent } from './rg-forms-username/rg-forms-username.component';
import { RgFormsPersonalComponent } from './rg-forms-personal/rg-forms-personal.component';
import { RgFormsPasswordComponent } from './rg-forms-password/rg-forms-password.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn;
}
