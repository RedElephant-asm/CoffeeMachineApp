import { Component, OnInit } from '@angular/core';
import {OrderService} from '../Services/TransportServices/orderService/order.service';

@Component({
  selector: 'app-order-stand',
  templateUrl: './order-stand.component.html',
  styleUrls: ['./order-stand.component.css']
})
export class OrderStandComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  getOrderImage(): string{
    return this.orderService.getOrderImageIfConfirmed()
  }

  ngOnInit(): void {
  }

}
