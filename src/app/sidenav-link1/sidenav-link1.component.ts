import { Component, OnInit } from '@angular/core';

export class Data {
Field: string;
data: string;
}


const UserData: Data[] = [
  {Field: 'Name', data: 'balhhhhh'},
  {Field: 'EmailId', data: 'jlkjdoqod'},
  {Field: 'Password', data: 'hjhdajlji'},
  {Field: 'DOB', data: 'hkjhdqlhxx'},
  {Field: 'ContactInfo', data: 'hisachklhla'},
];


@Component({
  selector: 'app-sidenav-link1',
  templateUrl: './sidenav-link1.component.html',
  styleUrls: ['./sidenav-link1.component.css']
})
export class SidenavLink1Component implements OnInit {
  diplayedColumns: string[] = ['Field', 'data'];
  dataSource = UserData;
  constructor() { }

  ngOnInit() {
  }

}
