import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedInUserName: String;
  userName: String;

  constructor(private router:Router, private service: ServiceService) { }
  logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("isLogin");
    this.router.navigate(['login']);

  }
  ngOnInit() {
    this.getData();
  }
  toFriends(){
    this.router.navigate(['search']);
  }

  getData(){
     
    console.log(this.userName);
    
    
    this.service.shareDataSubject.subscribe(recievedData => {this.userName = recievedData})
    this.userName = localStorage.getItem('name');
  }
  
  // tiles: Tile[] = [
  //   {text: '', cols: 2, rows: 2, color: 'lightblue'},
  // ];
}
