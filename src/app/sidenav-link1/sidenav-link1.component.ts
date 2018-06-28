import { Component, OnInit } from '@angular/core';
import {Register} from '../registerUser' ;

export interface Data {
  Field: string;
  data: string;
  }

  const UserData: any[] = [
    {Field: 'Name', data: 'balhhhhh'},
    {Field: 'EmailId', data: 'jlkjdoqod'},
    {Field: 'Password', data: 'hjhdajlji'},
    {Field: 'DOB', data: 'hkjhdqlhxx'},
    {Field: 'ContactInfo', data: 'hisachklhla'}
  ];


@Component({
  selector: 'app-sidenav-link1',
  templateUrl: './sidenav-link1.component.html',
  styleUrls: ['./sidenav-link1.component.css']
})
export class SidenavLink1Component implements OnInit {
  diplayedColumns: string[] = ['Field', 'data'];
  dataSource = UserData;
  var: string ;
  currentUser: Register ;
  constructor() { }

  ngOnInit() {
    this.var = localStorage.getItem('userInfo');
    this.currentUser = JSON.parse(this.var);
    console.log(this.currentUser);
  }
 

  // tslint:disable-next-line:member-ordering



}
