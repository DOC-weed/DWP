import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
declare var paypal;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('paypal', { static: true}) paypalElement : ElementRef;
  carDetails:any;
  carTotal:any;

  constructor(public service: ServicesService, public route: Router) { }

  ngOnInit(): void {
    this.getInfo();
    paypal.Buttons({
      createOrder: (data, actions)=>{
        return actions.order.create({
          purchase_units: [
            {
              description: 'Productos en venta',
              amount:{
                currency_code: 'MXN',
                value:this.carTotal.data.total
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) =>{
        const order = await actions.order.capture();
        console.log(order);
        localStorage.setItem('pedido',order.id);
        localStorage.setItem('fecha_pedido', order.create_time);
        localStorage.setItem('monto', order.purchase_units[0].amount.value);
        let id =localStorage.getItem('session_id');
        let obj= {
          session_id: id,
          paypal_payment_details:order
        };
        let xml = this.service.createOrder(obj);
        console.log(xml);
        this.route.navigateByUrl('thanks');
      },
      onError: err =>{
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }
  getInfo(){
    let obj ={session_id: localStorage.getItem('session_id')};
    this.service.getCar(obj).then((res:any)=>{
      this.carDetails = res.data.items;
      this.carTotal = res;
      console.log(this.carDetails);
      console.log(this.carTotal);
    }).catch(err=>{

    });
  }

}
