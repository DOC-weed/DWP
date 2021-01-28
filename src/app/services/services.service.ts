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
 
  constructor(private http:HttpClient) { }
  /*registarUsuario(usuario: User){
    console.log(usuario);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    return  xmlhttp.open('POST',this.url + 'security/create_account',false).toPromise();
  }*/
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
  callbackFunction(xmlhttp){
    console.log(xmlhttp);
    return xmlhttp;

  }
} 

