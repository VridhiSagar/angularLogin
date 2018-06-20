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
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import {CloginGuard} from './clogin.guard';
import { SidenavComponent } from './sidenav/sidenav.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
 const loginRoutes:Routes=[
   {
     path:'login', component:LoginFormComponent,canActivate:[CloginGuard]
   },
   {
    path:'',component:DashboardComponent,canActivate:[AuthGuard]
   },
  
   {
     path:'**',redirectTo:'/login',pathMatch:'full'
   }
 ]




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
   
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    RouterModule.forRoot( loginRoutes, { enableTracing: true } ),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
