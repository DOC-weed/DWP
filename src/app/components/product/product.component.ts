import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/models/login';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_info: any = [];
  cantidad = 1;
  product_id;
  closeResult = '';
  email_confirmation= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
 pass_confirmation = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/);
 user = new Login();
 check= false;
  constructor(public service: ServicesService, private _route: ActivatedRoute, private modal:NgbModal, private cookie:CookieService, public route:Router) { 
    this.product_id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductInfo();
  }

  getProductInfo(){
    this.service.getEspecificProduct(this.product_id).then((info: any) =>{
      console.log(info);
      this.product_info = info.data.items;
      console.log(this.product_info);
    }).catch(err =>{
      console.log(err);
    });
  }

  addtoCar(content){
    console.log(localStorage.getItem('session_id'))
    const id = localStorage.getItem('session_id');
    if(localStorage.getItem('session_id') == null ){
      this.open(content);
    } else {
    let producto_info ={
      session_id : localStorage.getItem('session_id'),
      item_id:this.product_id,
      item_quantity:this.cantidad
    }
    this.service.addToCar(producto_info).then((res: any)=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    let obj ={session_id: id}
    this.service.getCar(obj).then((res: any) => {
      this.service.cantidad = res.data.items_quantity
      window.location.reload();
    })
   }
  }


  open(content) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
      this.service.bul = true
      window.location.reload();
      
    }).catch((err) => {
      alert(err);
      
    });
    
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  changeImg(e){
    e.preventDefault();
    document.getElementById('principal').setAttribute('src',e.target.src)
    }

}
