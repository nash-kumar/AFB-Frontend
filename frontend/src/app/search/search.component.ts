import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Tile } from '../models/tile';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  firstname: string;
  surname: string;
  mobile: number;
  email: string;
  dob: string;
  password: string;
  gender: string

  constructor(private router:Router, private service: ServiceService){}

  p: Number = 1;
  panelOpenState = false;
  tiles=[];
  success=false;
  
  userData(){
    this.service.getUsers().subscribe((response :any) => {
    
    
        console.log("response",response);
        this.success= true;
        let a = response.user;
        this.tiles = a;
        // this.tiles = response.user;
      
    })

  }
  
ngOnInit(){
    this.userData();
  }

}

