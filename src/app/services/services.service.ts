import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/users';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = environment.urlProd;
  bul = false;
  product_id: number;
  cantidad = 0;

  constructor(private http:HttpClient) { 
    
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  registarUsuario(usuario: User){
    console.log(usuario);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('POST',this.url + 'security/create_account',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(usuario)); 
    return xmlhttp; 
  }
  recovery(usuario){
    console.log(usuario);
    console.log('1');
    //return this.http.post(this.url+'request_recovery_codePOST', usuario).toPromise();
    
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('POST',this.url + 'security/request_recovery_code',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(usuario)); 
    return xmlhttp; 
  }
  validate_recovery(usuario){
    console.log(usuario);
    console.log('2');
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('POST',this.url + 'security/validate_recovery_code',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(usuario)); 
    return xmlhttp; 
  }
  update_password(usuario){
    console.log(usuario);
    console.log('3');
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('POST',this.url + 'security/update_password',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(usuario)); 
    return xmlhttp; 
  }
  loginUser(user: any){
    return this.http.post(this.url +'security/login',user).toPromise();
  
  }
  validateSession(id){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('POST',this.url + 'security/ping ',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(id)); 
    return xmlhttp; 
    
  }
  //PUT METHODS
  updateCart(obj: any){
    return this.http.put(this.url+'cart/update_item',obj).toPromise();
    

  }
  // GET METHODS
  addToCar(prodcut: any){
    return this.http.post(this.url +'cart/add_item', prodcut).toPromise();
  }
  getCar(session_id:any){
    return this.http.post(this.url +'cart/get_details', session_id).toPromise();
  }
   

  getCategories(){
    return this.http.get(this.url+'catalogs/categories').toPromise();
  }
  getAllProducts(data){
    return this.http.get(this.url +'catalogs/items/by_text/'+data).toPromise()
  }
  getEspecificCategory(data){
    return this.http.get(this.url+'catalogs/items/by_category/'+data).toPromise()
  }
  getEspecificProduct(id){
    return this.http.get(this.url + 'catalogs/item_details/'+id).toPromise()
  }

  //DELETE
  deleteCar( obj){
    //return this.http.delete(this.url + 'cart/remove_item/' , obj).toPromise();
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('DELETE',this.url + 'cart/remove_all',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(obj)); 
    return xmlhttp; 
  }
  deleteOne( id){
    //return this.http.delete(this.url + 'cart/remove_item/' , obj).toPromise();
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('DELETE',this.url + 'cart/remove_item',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(id)); 
    return xmlhttp; 

  }

  callbackFunction(xmlhttp){
    console.log(xmlhttp);
    return xmlhttp;

  }
} 

