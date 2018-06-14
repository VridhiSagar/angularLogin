import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Component,OnInit} from '@angular/core';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ServerService} from './server.service';
//import {Observable} from 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { DemoServiceComponent } from './demo-service/demo-service.component';  // replaces previous Http service

 




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
   
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
