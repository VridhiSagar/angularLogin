import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {users}  from './users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
//import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) {}
    

  getUser():Observable<users[]>{
    return this.http.get<users[]>('https://s3.amazonaws.com/fetection/user.json')
                                 



    }


  }
  

