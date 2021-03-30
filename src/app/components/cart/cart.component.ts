import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
//import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartDetails: any;
cartTotal: any;
cantidadCart = 0;
session = localStorage.getItem('session_id');
emptyCart:boolean;
//public numberCantidad = new Subject<string>();
  constructor(public service: ServicesService, public route: Router) { 
    
  }

  ngOnInit(): void {
    this.getCart();
    this.validate();
  }

  getCart(){
    let obj ={session_id: localStorage.getItem('session_id')};
    this.service.getCar(obj).then( (res:any)=>{
      this.cartDetails = res.data.items;
      this.cartTotal =res;
      this.cantidadCart = res.data.items_quantity;
      if(res.data.items_quantity == 0){
        this.emptyCart = false;
        this.route.navigateByUrl('busqueda');
      }else {
        this.emptyCart =true;
      }
      console.log(this.cartDetails);
      console.log(this.cartTotal);
    }).catch(err =>{
      console.log(err);
    })
  }
  delete(){
    let session = localStorage.getItem('session_id');
    let obj ={session_id:session};
    let xml = this.service.deleteCar(obj);
      console.log(xml);
    this.route.navigateByUrl('busqueda');
  }
  deleteOne(id, event){
    event.preventDefault();
    let obj ={session_id:this.session,item_id:id};
    let xml = this.service.deleteOne(obj);
    console.log(xml)
    this.getCart()
  }
  validate(){

    if(this.cartDetails == undefined){
      console.log('validacion funciona');
      this.emptyCart = false;
    }else{

      console.log('validacion no funciona');
      this.emptyCart = true;
    }

  }
  backStore(){
    this.route.navigateByUrl('busqueda');
  }

  actualizarCarrito(value,id){
    console.log(value);
    
    let obj ={session_id:this.session,item_id:id,item_quantity:value};
    this.service.updateCart(obj).then(res =>{
      console.log(res);
      this.getCart();

    }).catch(err =>{
      console.log(err);
    })
  }

}
