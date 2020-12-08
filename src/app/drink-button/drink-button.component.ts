import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DrinkButton} from './DrinkButton';
import {DataRestService} from '../Services/DataRest/data-rest.service';
import {OrderService} from '../Services/TransportServices/orderService/order.service';

@Component({
  selector: 'app-drink-button',
  templateUrl: './drink-button.component.html',
  styleUrls: ['./drink-button.component.css'],
  interpolation: ["{{", "}}"]
})
export class DrinkButtonComponent implements OnInit, AfterContentInit{

  @Input() buttonEntity: DrinkButton
  @Output() buttonSwitchedOn: EventEmitter<void> = new EventEmitter<void>()

  isDisabled: boolean = false
  constructor(private dataService: DataRestService, private orderService: OrderService) {}

  disableIfEmpty(): void{
    this.dataService.getDrinkById(this.buttonEntity.drinkId)
      .then(drink => {
        if(drink.portionCount < 1){this.isDisabled = true}
        this.buttonSwitchedOn.emit()
      })
  }

  getButtonSatatus(): boolean{
    return this.isDisabled
  }


  onButtonClick() : void{
    this.doOrder()
  }

  doOrder() : void{
    this.orderService.regOrder(this.buttonEntity.drinkId)
      .then(restedData => {
        if(restedData.portionCount - 1 < 1){
          this.isDisabled = true
        }
      })
    this.orderService.isOrderConfirmed = false
  }

  ngOnInit(): void {
    this.disableIfEmpty()
  }

  ngAfterContentInit(): void {
  }
}
