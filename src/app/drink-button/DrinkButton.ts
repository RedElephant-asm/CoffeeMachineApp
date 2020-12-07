export class DrinkButton{

  public drinkPictureUrl: string | undefined
  public drinkButtonName: string | undefined
  public drinkId: number | undefined

  constructor()
  constructor(url: string, name: string, id: number)
  constructor(url?:string, name?:string, id?: number){
    if(url && name){
      return {drinkPictureUrl: url, drinkButtonName: name, drinkId: id}
    }
    return {drinkPictureUrl: undefined, drinkButtonName: undefined, drinkId: undefined}
  }
}
