import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor () {}

 loginIn(username) {
  sessionStorage.setItem('auth', username);

 }
 logout() {
  sessionStorage.removeItem('auth');

 }



}
