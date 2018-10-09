import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Tile } from '../../models/tile';
import { AuthGaurd } from '../../service/auth-gaurd.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  constructor(private router:Router, private service: ServiceService,private auth: AuthGaurd) {}

  user = '';
  success = false;
  filteredName;
  resultData;
  a = [];

  userData(name){
    this.service.getprofile(name).subscribe((response :any) => {
       this.user = response.result;
        this.a.push(this.user);
    });
  }

  ngOnInit() {
    let name = 'shanth';
    this.userData(name);
      var b = this.a;
      console.log(b);

  }

}

