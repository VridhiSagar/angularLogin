import { Injectable } from '@angular/core';
import {users}  from './users';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
 
  constructor(private http :HttpClient) {}

 loginIn(username){
  sessionStorage.setItem("auth",username);

 }
 logout(){
  sessionStorage.removeItem("auth");

 }
    



}
