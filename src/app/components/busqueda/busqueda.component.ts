import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
check = false;
categories : any;
products : [];
  constructor( public service : ServicesService) { 
    this.products = []
  }

  ngOnInit(): void {
    let licencia ='licencia';
    let cate = 'plan'
    this.getAllProducts();
    this.getEspecificProduct(licencia);
    this.getAllCategories();
    this.getEspecificCategory(cate)
  }

  getAllCategories(){
    this.service.getCategories().then((info: any) =>{
      this.categories= info.data.categories;
      console.log('categorias');
      console.log(this.categories);
    }).catch((err) =>{
      console.log(err);
    })
  }
  getAllProducts(){
    this.service.getAllProducts(' ').then((res: any)=>{
      this.products = res.data.items;
      console.log('Productos');
      console.log(this.products);
    }).catch((err)=>{
      console.log(err);
    })
  }
  getEspecificProduct(name){
    this.service.getAllProducts(name).then((res: any)=>{
      console.log(res.data.items);
    }).catch((err)=>{
      console.log(err);
    })
  }
  getEspecificCategory(name){
    this.service.getEspecificCategory(name).then((res: any)=>{
      console.log(res.data.items);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
