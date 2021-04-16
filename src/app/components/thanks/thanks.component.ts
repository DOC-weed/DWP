import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  pedido;
  precio;
  fecha;

  constructor() { }

  ngOnInit(): void {
    this.pedido = localStorage.getItem('pedido');
    this.precio = localStorage.getItem('monto');
    this.fecha = localStorage.getItem('fecha_pedido');
  }

}
