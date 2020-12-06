import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css'],
  interpolation: ["{{", "}}"]
})
export class MachineComponent implements OnInit {

  titleText: string = "Title text here"

  changeTitleText(event: any): void{
    this.titleText = event.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
