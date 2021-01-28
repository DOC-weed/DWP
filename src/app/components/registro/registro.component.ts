import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import {User} from '../../models/users';
import {Dire} from '../../models/address';
import { UserModel } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 Usuario = new UserModel();
  // tslint:disable-next-line: max-line-length
  email_confirmation= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  pass_confirmation = new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/);
  siteKey: string;
  miloco_dele_pa_dentro= false;
  constructor(public service: ServicesService, public router: Router) {
    this.siteKey = '6LffdDwaAAAAABy1pbhQflEpSfymvai4qxEZREM8';
   }

  ngOnInit(): void {
  }
  registrarUsuario(myForm: NgForm) {
    if(this.miloco_dele_pa_dentro){
      this.service.registarUsuario(this.Usuario).then((usuario: any) => {
        myForm.reset();
        alert('Registrado correctamente');
        this.router.navigateByUrl('login');
      }).catch((err: any) => {
        alert('Algo salio mal');
      });
    }else{
      alert('Capcha invalido');
    }
   
}
handleSuccess(event){
  this.miloco_dele_pa_dentro = true;
}

}
