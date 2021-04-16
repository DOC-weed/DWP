import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 obj2:any;
 ordersObj:any;
  constructor(public service: ServicesService) {
    
   }
  

  ngOnInit(): void {
    this.getOrders();
  }
  
  getOrders(){
    let id =localStorage.getItem('session_id');
    let obj ={
      session_id:id
    };
    let xml =this.service.getOrders(obj)
    this.obj2 = JSON.parse(xml.response);
    console.log(this.obj2.data.orders);
    this.ordersObj = JSON.parse(JSON.stringify(this.obj2.data.orders));
    console.log(this.ordersObj);
  }

}
