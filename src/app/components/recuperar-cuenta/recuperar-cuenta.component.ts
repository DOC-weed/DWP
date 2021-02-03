import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Code } from 'src/app/models/code';
import { Email } from 'src/app/models/email';
import { Password } from 'src/app/models/password';
import { ServicesService } from 'src/app/services/services.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.component.html',
  styleUrls: ['./recuperar-cuenta.component.css']
})
export class RecuperarCuentaComponent implements OnInit {
  email_confirmation= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  pass_confirmation = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/);
  email = new Email();
  codee =new Code();
  password = new Password();
  container = false;
  container2 = true;
  container3 = false;
  constructor(public service: ServicesService, public route: Router) { }

  ngOnInit(): void {
    localStorage.clear();

  }
  request_recovery(){
    localStorage.setItem('email',this.email.email);
    let xml = this.service.recovery(this.email);
    let jsonxml = JSON.parse(xml.responseText);  
    console.log(jsonxml.status);
    if(jsonxml.status == 'error'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: jsonxml.error_message
      });
    }else{
      this.container=true;
      this.container2=false;
    }
}
validate_code(code){

  localStorage.setItem('code',code);
  let obj ={
    email:localStorage.getItem('email'),
    recovery_code:code
  };
  console.log(obj);

    let xml = this.service.recovery(obj);
    let jsonxml = JSON.parse(xml.responseText);  
    console.log(jsonxml.status);
    if(jsonxml.status == 'error'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: jsonxml.error_message
      });
    }else{
      this.container3= true;
    }
}
update_pass(pass1, pass2){
  
  let obj ={
    email:localStorage.getItem('email'),
    recovery_code:localStorage.getItem('code'),
    password: pass1,
    password_confirmation:pass2
  };
  console.log(obj);

    let xml = this.service.update_password(obj);
    let jsonxml = JSON.parse(xml.responseText);  
    console.log(jsonxml.status);
    if(jsonxml.status == 'error'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: jsonxml.error_message
      });
    }else{
      this.route.navigateByUrl('login'); 
    }

}

}
