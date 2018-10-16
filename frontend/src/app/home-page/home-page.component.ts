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
    this.router.navigate(['profile']);

  }

  ngOnInit() {
    this.getData();
  }

  toFriends(){
    this.router.navigate(['search']);
  }

  onProfile(id:string) {
    if(confirm ('success') == true) {
      this.service.getprofile(id).subscribe((res)=>{
        console.log('user/'+id);
      });
    }
    this.router.navigate(['profile']);
  }

  getData(){
    this.service.shareDataSubject.subscribe(recievedData => {this.userName = recievedData})
    this.userName = localStorage.getItem('name');
  }

}
