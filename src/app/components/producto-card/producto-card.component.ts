import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {
  @Input() product: []; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

}
