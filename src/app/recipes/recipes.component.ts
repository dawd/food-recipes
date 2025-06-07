import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipesList: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    if (this.recipesList) {
      this.getRecipesList();
    }
  }

  getRecipesList(): void {
    this.recipesService.getRecipesList().subscribe({
      next: (response) => {
        this.recipesList = response.recipes;
      },
      error: (error) => {
        console.error('Error fetching recipes:', error);
      },
    });
  }
}
