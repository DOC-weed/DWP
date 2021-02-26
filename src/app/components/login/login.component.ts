import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { domain } from 'process';
import { Login } from 'src/app/models/login';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // tslint:disable-next-line: max-line-length
 email_confirmation= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
 pass_confirmation = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/);
 user = new Login();
 check= false;
  constructor(public service: ServicesService, private cookie: CookieService, public router:Router) { }

  ngOnInit(): void {
  }
  login(){
    let xml = this.service.loginUser(this.user);
    let jsonxml = JSON.parse(xml.responseText);
    if(jsonxml.status == 'error'){
      alert(jsonxml.error_message);
    }else{
      localStorage.setItem('fullname', jsonxml.data.customer.full_name);
      localStorage.setItem('session_id', jsonxml.data.session_id);
      localStorage.setItem('session_expiration_date',jsonxml.data.session_expiration_date);
      if(this.check){
        let date = new Date(jsonxml.data.session_expiration_date);
        console.log(date);
        this.cookie.set('session', jsonxml.data.session_id,{expires: date, sameSite: 'Lax'});
        let cookies = this.cookie.get('session');
        console.log(cookies);
      }
      this.service.bul = true
      this.router.navigateByUrl('busqueda');
    }
  }

}
