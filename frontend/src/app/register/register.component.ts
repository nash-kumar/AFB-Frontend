import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  registerForm: FormGroup;
 

  minDate = new Date(1950, 0, 1);
  maxDate = new Date(2000, 0, 1);

    constructor(private fb:FormBuilder,private router:Router,private service: ServiceService) { 

  
    this.registerForm = fb.group({
      "fname": [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      "lname": [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      "Email": [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')])],
      "phone": [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])],
      "date": [null , Validators.required],
      "pass": [null,Validators.required],
      "gender": [null, Validators.required],
      "emp": [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{4}')])]
    })
  
  }
  ngOnInit(){ 
   
  }

  navigateLogin() {
    
    var data = this.registerForm.value;
    const data1 = {firstname: data.fname, surname: data.lname, mobile: data.phone, email: data.Email + "@accionlabs.com", dob: data.date, password: data.pass, emp_id: data.emp, gender: data.gender}
    this.service.register(data1).subscribe((response: any) => {
    if(response.success){
      swal("Congrats!!", " You are a member of Accion Labs", "success");;
    this.router.navigate(['login']);
    }else{
    alert(response.error);
    }
    })
    
    
  }
  navigateLogin1(){
    this.router.navigate(['login']);
  }

 
}
