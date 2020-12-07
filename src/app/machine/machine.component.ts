import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css'],
  interpolation: ["{{", "}}"]
})
export class MachineComponent implements OnInit {

  isKeyboardSwitchedOn: boolean = false

  keyboardOn(){
    setTimeout(() => {
      this.isKeyboardSwitchedOn = true
      console.log("Keyboard on !")
    }, 500)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
