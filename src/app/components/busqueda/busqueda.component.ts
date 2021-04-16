import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
check = false;
categories: any;
products: any;
filterfield = '';
busquedaTodo = true;
busquedaModulo = false;
productoModulo: any;
busquedaPaquete = false;
productoPaquete: any;
busquedaPlan = false;
productoPlan: any;
busquedaServicio = false;
productoServico: any;

  constructor( public service: ServicesService) {}

  ngOnInit(): void {
    this.busquedaTodo = true;
    this.products = this.getAllProducts();
    this.getEspecificCategory('');
    this.categories = this.getAllCategories();
    
  }

  getAllCategories(){
    this.service.getCategories().then((info: any) => {
      this.categories = info.data.categories;
      // console.log('categorias');
      // console.log(this.categories);
    }).catch((err) => {
      console.log(err);
    });
  }
  getAllProducts(){
    this.service.getAllProducts(' ').then((res: any) => {
      this.products = res.data.items;
      // console.log('Productos');
      // console.log(this.products);
    }).catch((err) => {
      console.log(err);
    });
  }
  getEspecificProduct(name){
    this.service.getAllProducts(name).then((res: any) => {
      // console.log(res.data.items);
    }).catch((err) => {
      console.log(err);
    });
  }

  async getEspecificCategory(name){
    let products: any;
    await this.service.getEspecificCategory(name).then((res: any) => {
      console.log(res.data.items);
      products = res.data.items;
      // console.log(this.NuevosProductos);
    }).catch((err) => {
      console.log(err);
    });
    return products;
  }

   async sortByCategory() {
    if(this.busquedaModulo === false && this.busquedaPlan === false && this.busquedaPaquete === false && this.busquedaServicio === false ) {
      this.busquedaTodo = true;
      this.products = this.getAllProducts();
    }
    if (this.busquedaModulo) {
      this.busquedaTodo = false;
      const res = await this.getEspecificCategory('Módulo');
      this.productoModulo = res;
    }
    if(this.busquedaPlan){
      this.busquedaTodo = false;
      const res = await this.getEspecificCategory('Plan');
      this.productoPlan = res;
    }
    if(this.busquedaPaquete) {
      this.busquedaTodo = false;
      const res = await this.getEspecificCategory('Paquete');
      this.productoPaquete = res;
    }
    if(this.busquedaServicio){
      this.busquedaTodo = false;
      const res = await this.getEspecificCategory('Servicio');
      this.productoServico = res;
    }
  }
  viewProduct(id, e){
    e.preventDefault();
    this.service.product_id = id;
    console.log(this.service.product_id);
  }
  Buscar(text){
    this.filterfield = text;
  }
}
