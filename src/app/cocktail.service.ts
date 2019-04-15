import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  id : number;
  name : string ;
  price : number ;
  img : any ;

  private _url: string = "/assets/data/cocktail.json";

  constructor(private http : HttpClient) { }

  getCocktails() : Observable<CocktailService[]>
  {
    return this.http.get<CocktailService[]>(this._url)
  }
}
