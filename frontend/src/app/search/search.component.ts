import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Tile {
  
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router:Router){}
  p: Number = 1;
  panelOpenState = false;
  tiles: Tile[] = [];
  

}
