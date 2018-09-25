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
   name: String;
   mail;

    
  constructor(private fb: FormBuilder,private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')])],
      password: ['', Validators.required]
    });
    let tocken = localStorage.getItem('isLogin');
    if(tocken){
      this.router.navigate(['homepage']);
    }
  }

  onNavDash(){
    
    var data = this.loginForm.value;
    const data1 = {email :data.Email + "@accionlabs.com",password :data.password}
    this.service.login(data1).subscribe((response: any) => {
      if(response.success){
        swal("Good job!", "Succesfully Logged In", "success");
        localStorage.setItem('isLogin','true');
        this.service.getUsers().subscribe((response :any) => {
          for(let i = 0; i < response.user.length; i++){
            this.mail = this.loginForm.value.Email + "@accionlabs.com";
            if(this.mail === response.user[i].email){
              this.name = response.user[i].firstname;
              localStorage.name = this.name;
              // localStorage.setItem('name',name);
              this.service.sendDataToOtherComponent(this.name);
            }
            
          }
      });
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
