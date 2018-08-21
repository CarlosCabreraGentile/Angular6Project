import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [];

  constructor(private shoppingListService: ShoppingListService) { 
  }

  ngOnInit() {
    console.dir('Created');
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) =>{
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy() {
    console.log(this.ingredients);
    console.dir(this.ingredients);
    console.table(this.ingredients);
    console.dir('Destroyed');
  }

}
