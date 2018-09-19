import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
export interface Tile {
  
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  constructor(private router:Router, private service:ServiceService){}
  p: Number = 1;
  panelOpenState = false;
  tiles: Tile[] = [
    {"_id": "5b98b56ff9aacc1187abbe4e","firstname": "Vinay","surname": "kumar","mobile": 8867609885,"email": "nareshkumar@accionlabs.com","dob": 15081994,"password": "AccionLabs@123","gender": "male","id": 1,"__v": 0,"emp_id": 2346},{"_id": "5b9b56573e02b45a4ade4e02","firstname": "Vinay","surname": "kumar","mobile": 8867609885,"email": "nareshkumar@accionlabs.com","dob": 15081994,"password": "AccionLabs@123","emp_id": 2346,"gender": "male","id": 3,"__v": 0},{"_id": "5b9b5aabf6b66a6496f8d27d","firstname": "shant","surname": "kumar","mobile": 8867609885,"email": "nareshkumar@accionlabs.com","dob": 15081994,"password": "AccionLabs@123","emp_id": 2347,"gender": "male","id": 4,"__v": 0},
    {"_id": "5b98b56ff9aacc1187abbe4e","firstname": "Vinay","surname": "kumar","mobile": 8867609885,"email": "nareshkumar@accionlabs.com","dob": 15081994,"password": "AccionLabs@123","gender": "male","id": 1,"__v": 0,"emp_id": 2346},{"_id": "5b9b56573e02b45a4ade4e02","firstname": "Vinay","surname": "kumar","mobile": 8867609885,"email": "nareshkumar@accionlabs.com","dob": 15081994,"password": "AccionLabs@123","emp_id": 2346,"gender": "male","id": 3,"__v": 0},{"_id": "5b9b5aabf6b66a6496f8d27d","firstname": "shant","surname": "kumar","mobile": 8867609885,"email": "nareshkumar@accionlabs.com","dob": 15081994,"password": "AccionLabs@123","emp_id": 2347,"gender": "male","id": 4,"__v": 0}


  ];
  

  

}
