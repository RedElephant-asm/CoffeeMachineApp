import {Component, Input, OnInit} from '@angular/core';
import {DrinkButton} from './DrinkButton';

@Component({
  selector: 'app-drink-button',
  templateUrl: './drink-button.component.html',
  styleUrls: ['./drink-button.component.css'],
  interpolation: ["{{", "}}"]
})
export class DrinkButtonComponent implements OnInit {

  @Input() buttonEntity: DrinkButton

  constructor() { }

  ngOnInit(): void {
  }

}
