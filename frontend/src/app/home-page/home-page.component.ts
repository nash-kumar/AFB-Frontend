import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { log } from 'util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  
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
    
    this.service.shareDataSubject.subscribe(recievedData => {this.userName = recievedData})
    this.userName = localStorage.getItem('name');
  }

}
