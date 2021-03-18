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
cant = 0;

  constructor(public route:Router, public service: ServicesService, private cookie: CookieService) {
    this.check = false
    this.products = []
   }

  ngAfterContentInit(){
    this.check = this.service.bul;

  }

  ngOnInit(): void {
    this.getCar();
    this.check = false
    this.route.events.subscribe(event => {
      this.check = this.service.bul
      this.username = localStorage.getItem('fullname');
      this.cant = this.getCar();
      this.validate();
    })
  }
  

  
  goto(e){
    e.preventDefault();
    this.route.navigateByUrl('login');
    this.service.bul = true
  }

  out(e){
    localStorage.clear();
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
  getCar(): any{
    let id = localStorage.getItem('session_id');
    let obj ={session_id: id}
    if(id == null){
      this.cant = 0;
      return 0;
    }else{
      this.service.getCar(obj).then((result:any) => {
        console.log(result);
        this.cant = result.data.items_quantity
        return result.data.items_quantity;
      }).catch((err) => {
        
      });
    }
    
  }
  
 

}
