import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { CookieService } from 'ngx-cookie-service';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
check = false;
username = localStorage.getItem('fullname');
categories : any;
products : [];

  constructor(public route:Router, public service: ServicesService, private cookie: CookieService) {
    this.check = false
    this.products = []
   }

  ngAfterContentInit(){
    this.check = this.service.bul;

  }

  ngOnInit(): void {
    this.check = false
    this.route.events.subscribe(event => {
      this.check = this.service.bul
      this.username = localStorage.getItem('fullname');
      this.validate(

    
      );
    })
  }
  

  
  goto(){
    this.route.navigateByUrl('login');
    this.service.bul = true
  }

  out(){
    localStorage.clear();
    this.route.navigateByUrl('login');
    this.cookie.deleteAll('../');
    this.service.bul = false
    
  }

validate(){
    if(localStorage.getItem('session_id')== undefined || localStorage.getItem('session_id')== ''){
      this.service.bul = false;
    }else{
      this.service.bul = true;
    }
  }
  getAllProducts(){
    
  }
  
 

}
