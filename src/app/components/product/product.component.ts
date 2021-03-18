import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_info: any;
  cantidad: number;
  product_id;
  constructor(public service: ServicesService, private _route: ActivatedRoute) { 
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
  addtoCar(){
    console.log(localStorage.getItem('session_id'))
   if(localStorage.getItem('session_id') == null ){
     
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
   }
  }

  changeImg(e){
    e.preventDefault();
    document.getElementById('principal').setAttribute('src',e.target.src)
    }

}
