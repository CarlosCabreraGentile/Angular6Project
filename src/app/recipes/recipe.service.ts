import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Array<Recipe> = [
        new Recipe('Pretzel', 
        'Spicy', 
        'http://cdn.shopify.com/s/files/1/0614/0993/products/3oz_grande.jpg',
        [
            new Ingredient('Flour', 1),
            new Ingredient('Salt', 0.5),
            new Ingredient('Seeds', 100)
        ]),
        
        new Recipe('Hamburguer', 
        'With chips', 
        'https://c.tadst.com/gfx/750w/hamburger-day.jpg?1', 
        [
            new Ingredient('meat', 1),
            new Ingredient('French Fries', 20),
        ])
      ];

    constructor(private shoppingListService: ShoppingListService){

    }  

    /**
     * Return an exact copy of the original array of recipes
     */
    getRecipes(){
        return this.recipes.slice();//devuelve una copia exacta del array recipe
    }      

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
     
}