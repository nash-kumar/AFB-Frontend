import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   Email:String="";
   pass:String="";
   success=false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ['', Validators.email],
      password: ['', Validators.required]
    });
    let tocken = localStorage.getItem('isLogin');
    if(tocken){
      this.router.navigate(['homepage']);
    }
  }

  onNavDash(){
    
    var data = this.loginForm.value;
    const data1 = {email :data.Email ,password :data.password}
    this.service.login(data1).subscribe((response: any) => {
  
      if(response.success){
        swal("Good job!", "Succesfully Loged In", "success");
        localStorage.setItem('isLogin','true');
      this.router.navigate(['homepage']);
      }else if(response.success){
        swal("Good job!", "response.message", "success");
      }else{
        swal("Good job!", "response.message", "success");
      }
      }, (err) => {
        swal("Sorry", "Incorrect Login", "error");})
      }

 
  navigateReg(){
    this.router.navigate(['register']);
  }
  navigateDash(){
    this.router.navigate(['homepage']);
  }
 
}
