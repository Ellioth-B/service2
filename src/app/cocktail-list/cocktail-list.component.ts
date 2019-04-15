import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails : any = [];

  constructor(public cocktail: CocktailService) { }

  afficher(): any {
    this.cocktails = this.cocktail.getCocktails()
    return this.cocktails;
    
  }

  ngOnInit() {
    this.cocktail.getCocktails().subscribe(data => (this.cocktails = data));
  }

}
