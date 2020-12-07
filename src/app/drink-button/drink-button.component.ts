import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DrinkButton} from './DrinkButton';
import {DataRestService} from '../Services/DataRest/data-rest.service';

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

  constructor(private http: DataRestService) {}

  disableIfEmpty(): void{
    this.http.getDrinkById(this.buttonEntity.drinkId)
      .then(drink => {
        if(drink.portionCount <= 0){
          this.isDisabled = true
        }
        this.buttonSwitchedOn.emit()
      })
  }

  ngOnInit(): void {
    this.disableIfEmpty()
  }

  ngAfterContentInit(): void {
  }
}
