import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }
  recipes:Recipe[] = [{
    id:'r1',
    title:'Schurrle Dish',
    imageUrl:'https://www.recipetineats.com/wp-content/uploads/2020/02/Honey-Garlic-Chicken-Breast_5-SQ.jpg',
    ingredients:['French Fries','Pork Meat','Salad']
  },
{
  id:'r2',
  title:'Spaghetti',
  imageUrl:'https://www.spendwithpennies.com/wp-content/uploads/2019/03/Spaghetti-and-Meatballs-SpendWithPennies-4.jpg',
  ingredients:['Spaghetti','Meat','Tomatos']
}]
getAllRecipes(){
  return [...this.recipes];
}
getRecipe(recipeId:string){
  return {
    ...this.recipes.find(recipe =>{
    return recipe.id === recipeId;
  }
  )}
}

deleteRecipe(recipeId:string){
  this.recipes = this.recipes.filter(recipe =>{
    return recipe.id !== recipeId;
  })
}


}
