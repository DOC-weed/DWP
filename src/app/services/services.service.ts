import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/users';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = environment.urlProd;
 
  constructor(private http:HttpClient) { }
  registarUsuario(usuario: User){
    console.log(usuario);
    //const header = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', 'http://localhost:4200/');
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json')
    headers=headers.append('Access-Control-Allow-Origin', '*')
    return this.http.post(this.url + 'security/create_account', usuario,{ headers: headers}).toPromise();
  }
} 
