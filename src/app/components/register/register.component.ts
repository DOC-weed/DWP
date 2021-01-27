import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel
  userForm: FormGroup;
  constructor(
    public fb: FormBuilder
  ) { this.createForm(); }

  ngOnInit(){
    
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName:['', Validators.required],
      middleName: ['',],
      lastName: ['',],
      phoneNumber: ['',Validators.compose([
        Validators.required, 
        Validators.minLength(10),
        Validators.maxLength(10)
      ])],
      city: [''],
      state: [''],
      email: [''],
      password: [''],
      passwordConfirmation: [''],
    })
  }

  prepareUser(): UserModel {
    const _user = new UserModel();
    _user.first_name = this.userForm.get('firstName').value;
    _user.middle_name = this.userForm.get('middleName').value;
    _user.last_name = this.userForm.get('lastName').value;
    _user.phone_number = this.userForm.get('phoneNumber').value;
    _user.address = {
      city: this.userForm.get('city').value,
      state: this.userForm.get('state').value
    };
    _user.email = this.userForm.get('email').value;
    _user.password = this.userForm.get('password').value;
    _user.password_confirmation = this.userForm.get('passwordConfirmation').value;
    console.log(_user);
    return _user;
  }
}
