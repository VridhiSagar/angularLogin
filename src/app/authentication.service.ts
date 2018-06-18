import { Injectable } from '@angular/core';
import {users}  from './users';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
 
  constructor() {}

 isLoggedIn(){
   if (localStorage.getItem("auth"))
   {
    
   }
    
 }



}
