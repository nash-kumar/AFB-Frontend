import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }
  logout(){
    localStorage.removeItem("isLogin");
    this.router.navigate(['login']);

  }
  ngOnInit() {
  }
  toFriends(){
    this.router.navigate(['search']);
  }
  
  // tiles: Tile[] = [
  //   {text: '', cols: 2, rows: 2, color: 'lightblue'},
  // ];
}
