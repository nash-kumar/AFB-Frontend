import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Tile } from '../models/tile';
import { AuthGaurd } from '../service/auth-gaurd.service';

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

  constructor(private router:Router, private service: ServiceService,private auth: AuthGaurd){}

  p: Number = 1;
  panelOpenState = false;
  tiles=[];
  success=false;

  logout(){
    // let tocken = localStorage.removeItem('isLogin');
    // if(tocken){
    //   this.router.navigate(['login']);
    // }
    localStorage.removeItem("isLogin");
    this.router.navigate(['login']);
  }
  
  userData(){
    this.service.getUsers().subscribe((response :any) => {
    
    
        
        this.success= true;
        let a = response.user;
        this.tiles = a;
        // this.tiles = response.user;
      
    })

  }
  
ngOnInit(){
    this.userData();
  }

  onHomepage() {
    this.router.navigate(['homepage']);
  }
}

