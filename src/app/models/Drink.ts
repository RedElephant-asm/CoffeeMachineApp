export class Drink{
  public id: number | undefined
  public name: string | undefined
  public portionCount: number | undefined
  public price: number | undefined

  constructor()
  constructor(id: number, name: string, portionCount: number, price: number)
  constructor(id?: number, name?:string, portionCount?:number, price?: number){
    if(id && name && portionCount && price){
      return {id: id, name: name, portionCount: portionCount, price: price}
    }
    return {id: undefined, name: undefined, portionCount: undefined, price: undefined}
  }
}

