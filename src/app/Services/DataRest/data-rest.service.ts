import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drink} from '../../models/Drink';

@Injectable({
  providedIn: 'root'
})
export class DataRestService {

  private url: string = 'http://localhost:8080/Drinks'

  constructor(private http: HttpClient) {
  }

  public sayHello(): void{console.log('Hello')}

  public getDrinks(): Promise<Array<Drink>>{
    return new Promise((resolve, reject) => {
      let restedData: Array<Drink>
      this.http.get<Array<Drink>>(this.url).subscribe(responce => restedData = responce)
      setTimeout(() => {
        resolve(restedData)
      }, 4000)
    })
  }
}
