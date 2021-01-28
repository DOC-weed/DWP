import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import {User} from '../../models/users';
import {Dire} from '../../models/address';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  Usuario: User = new User();
 


  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  constructor(public service: ServicesService, public router: Router) { }

  ngOnInit(): void {
  }
  registrarUsuario(myForm: NgForm) {
    
    this.service.registarUsuario(this.Usuario).then((usuario: any) => {
      myForm.reset();
      alert('Registrado correctamente');
      this.router.navigateByUrl('login');
    }).catch((err: any) => {
      alert('Algo salio mal');
    });

}
}
