import { Injectable } from '@angular/core';
import {forkJoin} from 'rxjs';
import{HttpClient,HttpHeaders}from '@angular/common/http';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
   
  submit(model){
    let body =JSON.stringify(model)
   // return this.http.get();

  }




}
