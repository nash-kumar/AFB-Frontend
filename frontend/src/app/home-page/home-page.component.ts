import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  
  // tiles: Tile[] = [
  //   {text: '', cols: 2, rows: 2, color: 'lightblue'},
  // ];
}
