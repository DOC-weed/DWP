import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { domain } from 'process';
import { Login } from 'src/app/models/login';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2'

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
    this.service.loginUser(this.user).then((result:any) => {
      console.log(result);
      localStorage.setItem('fullname', result.data.customer.full_name);
      localStorage.setItem('session_id', result.data.session_id);
      localStorage.setItem('session_expiration_date',result.data.session_expiration_date);
      if(this.check){
        let date = new Date(result.data.session_expiration_date);
        console.log(date);
        this.cookie.set('session', result.data.session_id,{expires: date, sameSite: 'Lax'});
        let cookies = this.cookie.get('session');
        console.log(cookies);
      }
      if(document.location.href === 'http://localhost:4200/login'){
        
        this.router.navigateByUrl('busqueda');
        
      }
      this.service.bul = true
      
    }).catch((err) => {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario y/o la contraseña son incorrectos.'
      });
      
    });
    
  }
  validateSesion(){
    let sess = this.cookie.getAll()
    let session_id = {
      session_id:sess.session
    };
    let session = this.service.validateSession(session_id);
    let jsonxml = JSON.parse(session.responseText);
    if(jsonxml.error_message == ''){
      this.router.navigateByUrl('busqueda');
    }else if(jsonxml.error_message == 'SessionExpired'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La sesión ha expirado.'
      });

    }
    console.log(this.cookie.getAll());
    
  }

}
