import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fname:String='';
  lname:String='';
  email;
  phone:Number;
  date;
  pass;
  constructor(private fb:FormBuilder,private router:Router) { 

  
    this.registerForm = fb.group({
      "fname": [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      "lname": [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      "email": [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')])],
      "phone": [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])],
      "date": [null , Validators.required],
      "pass": [null,Validators.required]
    })
  
  }
  ngOnInit(){}

  navigateLogin(){
    this.router.navigate(['login']);
  }

 
}
