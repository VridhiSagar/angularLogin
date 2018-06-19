import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {users}  from './users';
import { Observable } from 'rxjs';

//import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) {}
    private url="../../assets/users.json"

  getUser():Observable<users[]>{
    return this.http.get<users[]>('https://s3.amazonaws.com/fetection/user.json')
    }


  }
  

