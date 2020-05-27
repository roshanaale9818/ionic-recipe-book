import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Recipe } from '../recipe';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  constructor( private activatedRoute:ActivatedRoute,
    private recipeService:RecipesService,
    private router:Router,
    private altCtr:AlertController) { }
  loadedRecipe:Recipe;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    })
  }
  onDelete(){
    this.altCtr.create({header:'Are you sure?',message:'Do you really want to delete recipe ?',buttons:[
      {
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Delete',
        handler: ()=>{
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes'])
        }
      }
    ]}).then(alertEl =>{
      alertEl.present();
    })

  }

}
