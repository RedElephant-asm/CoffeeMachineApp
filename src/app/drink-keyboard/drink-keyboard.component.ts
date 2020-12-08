import {Component, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DrinkButton} from '../drink-button/DrinkButton';
import {DataRestService} from '../Services/DataRest/data-rest.service';
import {strict} from 'assert';
import {stringify} from 'querystring';
import {Drink} from '../models/Drink';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drink-keyboard',
  templateUrl: './drink-keyboard.component.html',
  styleUrls: ['./drink-keyboard.component.css'],
  interpolation: ["{{", "}}"],
})
export class DrinkKeyboardComponent implements OnInit{

  @Output() keyboardSwitchedOn = new EventEmitter<void>()

  public buttons: Array<DrinkButton[]>
  public workingButtonCount: number = 0

  constructor(private dataService: DataRestService) {}

  public buttonSwitchedOn(){
    this.workingButtonCount++
    if(this.workingButtonCount === 18){this.keyboardSwitchedOn.emit()}
  }


  ngOnInit(): Promise<void> {
    return this.dataService.getDrinks()
      .then(restedData =>{
        this.buttons = new Array<DrinkButton[]>()
        for (let counter: number = 0; counter < 9; counter++){
          this.buttons[counter] = new Array<DrinkButton>()
          this.buttons[counter].push(new DrinkButton(`assets/pictures/drinkButtons/drinkButton${counter * 2}.jpg`, restedData[counter * 2].name, restedData[counter * 2].id))
          this.buttons[counter].push(new DrinkButton(`assets/pictures/drinkButtons/drinkButton${counter * 2 + 1}.jpg`, restedData[counter * 2 + 1].name,  restedData[counter * 2 + 1].id))
        }

      })
  }
}
