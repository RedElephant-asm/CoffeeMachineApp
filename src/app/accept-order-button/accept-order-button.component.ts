import { Component, OnInit } from '@angular/core';
import {OrderService} from '../Services/TransportServices/orderService/order.service';
import {Drink} from '../models/Drink';
import {DataRestService} from '../Services/DataRest/data-rest.service';

@Component({
  selector: 'app-accept-order-button',
  templateUrl: './accept-order-button.component.html',
  styleUrls: ['./accept-order-button.component.css']
})
export class AcceptOrderButtonComponent implements OnInit {

  constructor(private orderService: OrderService, private dataService: DataRestService) {}

  confirmOrder(): void{
    if(this.orderService.currentOrder) {
      this.orderService.isOrderConfirmed = true
      this.orderService.isLastPossibleOrder = this.orderService.isLastPossibleOrder && true
      this.orderService.currentOrder.portionCount--
      this.dataService.updateDrink(this.orderService.currentOrder)
    }
  }

  getCurrentOrderName(): string{
    if(this.orderService.currentOrder){
      return `Your order : ${this.orderService.currentOrder.name}`
    } else return 'Your order here'
  }

  getCurrentOrderPrice(): string{
    if(this.orderService.currentOrder){
      return `Price of your order : ${this.orderService.currentOrder.price}`
    } else return 'Price of your order here'
  }

  ngOnInit(): void {
  }

}
