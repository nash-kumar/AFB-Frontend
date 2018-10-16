import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Tile } from '../../models/tile';
import { AuthGaurd } from '../../service/auth-gaurd.service';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = '';
  id: '';

  constructor(private router:Router, private service: ServiceService,private auth: AuthGaurd) { }

  getPfoile(id: string){ 
    
  }

  ngOnInit() {
    
  }

}

