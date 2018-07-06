import { Component, OnInit } from '@angular/core';


export interface Data {
  Field: string;
  data: any;
  }



@Component({
  selector: 'app-sidenav-link1',
  templateUrl: './sidenav-link1.component.html',
  styleUrls: ['./sidenav-link1.component.css']
})
export class SidenavLink1Component implements OnInit {
  userInfo: string ;
  currentUser: any;
  displayedColumns: string[] = ['Field', 'data'];

  dataSource:  Data[] = [];

  constructor() { }

  ngOnInit() {
    this.userInfo = localStorage.getItem('userInfo');
    console.log(this.userInfo);
    this.currentUser = JSON.parse(this.userInfo);
    this.dataSource  = [
    {Field: 'Name', data: this.currentUser.firstname + ' ' + this.currentUser.lastname },
    {Field: 'EmailId', data: this.currentUser.email},
    {Field: 'Password', data: this.currentUser.password},
    {Field: 'DOB', data: this.currentUser.dateOfBirth},
    {Field: 'ContactInfo', data: this.currentUser.contact},
    {Field: 'Gender', data: this.currentUser.gender}
  ];

  }






}
