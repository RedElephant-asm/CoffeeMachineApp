import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drink} from '../../models/Drink';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRestService {

  private url: string = 'http://localhost:8080/Drinks'

  constructor(private http: HttpClient) {}

  public getDrinkById(drinkId: number): Promise<Drink>{
    return new Promise((resolve, reject) => {
      let restedData: Drink
      let sub: Subscription = this.http.get<Drink>(this.url.concat('/' + drinkId)).subscribe(responce => restedData = responce)
      setTimeout(() => {
        sub.unsubscribe()
        resolve(restedData)
      }, 500)
    })
  }

  public getDrinks(): Promise<Array<Drink>>{
    return new Promise((resolve, reject) => {
      let restedData: Array<Drink>
      const sub: Subscription = this.http.get<Array<Drink>>(this.url).subscribe(responce => restedData = responce)
      setTimeout(() => {
        sub.unsubscribe()
        resolve(restedData)
      }, 500)
    })
  }
}
