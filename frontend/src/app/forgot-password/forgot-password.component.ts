import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      newPassword: new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    let passwordMatch = this.forgotForm.get('newPassword').value === this.forgotForm.get('confirmPassword').value
    if(passwordMatch){
      let confirmedData = this.forgotForm.get('confirmPassword').value;
      let passwordData = {"user" :{"password": confirmedData}};
      this.service.forgotPassword(passwordData).subscribe((response: any) => {console.log(response)});
    }
  }

}
