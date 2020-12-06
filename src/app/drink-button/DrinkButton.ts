export class DrinkButton{

  constructor()
  constructor(url: string, name: string)
  constructor(url?:string, name?:string){
    if(url && name){
      return {drinkPictureUrl: url, drinkButtonName: name}
    }
    return {drinkPictureUrl: undefined, drinkButtonName: undefined}
  }

  public drinkPictureUrl: string | undefined
  public drinkButtonName: string | undefined = 'Drink'
}
