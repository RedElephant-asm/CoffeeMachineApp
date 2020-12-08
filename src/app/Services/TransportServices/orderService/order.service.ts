import {EventEmitter, Injectable, Output} from '@angular/core';
import {Drink} from '../../../models/Drink';
import {DataRestService} from '../../DataRest/data-rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: Drink
  isOrderConfirmed: boolean = false

  regOrder(drinkId: number): void{
    this.dataService.getDrinkById(drinkId)
      .then(restedData => this.currentOrder = restedData)
  }

  getOrderImageIfConfirmed(): string{
    if(this.isOrderConfirmed){
      return `assets/pictures/drinkButtons/drinkButton${this.currentOrder.id - 1}.jpg`
    } else return ""
  }

  constructor(private dataService:DataRestService) { }
}
