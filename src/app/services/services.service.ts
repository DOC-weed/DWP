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
  loginUser(user){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.open('POST',this.url + 'security/login',false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = this.callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(user)); 
    return xmlhttp; 
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


  callbackFunction(xmlhttp){
    console.log(xmlhttp);
    return xmlhttp;

  }
} 

