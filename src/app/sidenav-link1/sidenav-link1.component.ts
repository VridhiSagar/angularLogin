import { Component, OnInit } from '@angular/core';
import {Register} from '../registerUser' ;

export interface Data {
  Field: string;
  data: any;
  }

  // const UserData: Data[] = [
  //   {Field: 'Name', data: 'balhhhhh'},
  //   {Field: 'EmailId', data: 'jlkjdoqod'},
  //   {Field: 'Password', data: 'hjhdajlji'},
  //   {Field: 'DOB', data: 'hkjhdqlhxx'},
  //   {Field: 'ContactInfo', data: 'hisachklhla'}
  // ];


@Component({
  selector: 'app-sidenav-link1',
  templateUrl: './sidenav-link1.component.html',
  styleUrls: ['./sidenav-link1.component.css']
})
export class SidenavLink1Component implements OnInit {
  var: string ;
  currentUser: Register ;
  displayedColumns: string[] = ['Field', 'data'];
  dataSource:  Data[] = [
    {Field: 'Name', data: this.currentUser.first + this.currentUser.last },
    {Field: 'EmailId', data: this.currentUser.email},
    {Field: 'Password', data: this.currentUser.password},
    {Field: 'DOB', data: this.currentUser.DOB},
    {Field: 'ContactInfo', data: this.currentUser.contactNo}
  ];


  constructor() { }

  ngOnInit() {
    this.var = localStorage.getItem('userInfo');
    console.log(this.var);
    this.currentUser = JSON.parse(this.var);
    console.log(this.currentUser);
  }


  // tslint:disable-next-line:member-ordering



}
