import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { CookieService } from 'ngx-cookie-service';
import { $, EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input()
  public _cartCantidad: '';
  public get cartCantidad(): '' {
    return this._cartCantidad;
  }
  public set cartCantidad(value: '') {
    this._cartCantidad = value;
  }

check :boolean;
cartCheck:boolean;
username = localStorage.getItem('fullname');
categories : any;
products : [];
cant = 0;

  constructor(public route:Router, public service: ServicesService, private cookie: CookieService) {
  
    this.products = []
   }

  

  ngOnInit(): void {
    this.getCar();
    this.validate();
    this.route.events.subscribe(event => {
      this.username = localStorage.getItem('fullname');
      this.validate();
    })
  
  }
  

  
  goto(e){
    e.preventDefault();
    this.route.navigateByUrl('login');
    this.check = true
  }

  out(e){
    localStorage.clear();
    this.cookie.deleteAll('../');
    this.check = false
  }

validate(){
    if(localStorage.getItem('session_id')== undefined || localStorage.getItem('session_id')== ''){
      this.check = false;
    }else{
      this.check = true;
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
        if( this.route.url == '/cart'){
          this.cartCheck = false;
          console.log('esto es el cart');
          this.cant = parseInt(this._cartCantidad)//result.data.items_quantity
          return this._cartCantidad //result.data.items_quantity;
        }else{
          this.cartCheck = true;
          console.log('esto no es cart');
          this.cant = result.data.items_quantity
          return result.data.items_quantity;
        }
        
      }).catch((err) => {
        
      });
    }
    
  }
  
 

}
