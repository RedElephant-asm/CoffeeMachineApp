import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MachineComponent } from './machine/machine.component';
import { DrinkKeyboardComponent } from './drink-keyboard/drink-keyboard.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import {HttpClientModule} from '@angular/common/http';
import { AcceptOrderButtonComponent } from './accept-order-button/accept-order-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    DrinkKeyboardComponent,
    DrinkButtonComponent,
    AcceptOrderButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
