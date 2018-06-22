import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavLink1Component } from './sidenav-link1/sidenav-link1.component';
import { SidenavLink2Component } from './sidenav-link2/sidenav-link2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import {CloginGuard} from './clogin.guard';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RegisterComponent } from './register/register.component';

 const loginRoutes: Routes = [
   {
     path: 'login', component: LoginFormComponent, canActivate: [CloginGuard]
   },
   {
    path: '', component: DashboardComponent, canActivate: [AuthGuard]
   },

   {
     path: '**', redirectTo: '/login', pathMatch: 'full'
   },
   {
   path: 'link1', component: SidenavLink1Component
   },
   {
   path: 'link2', component: SidenavLink2Component
   }
 ];




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
    SidenavLink1Component,
    SidenavLink2Component,
    RegisterComponent,

  ],
  exports: [
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
