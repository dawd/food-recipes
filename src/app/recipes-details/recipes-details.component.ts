import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnInit {
  recipe: any = {};
  recipeId: number = 0;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.params['id'];
    this.getRecipeById(this.recipeId);
  }

  getRecipeById(id: number) {
    this.recipesService.getRecipeById(id).subscribe({
      next: (response) => {
        this.recipe = response;
      },
      error: (error) => {
        console.error('Error fetching recipe details:', error);
      },
    });
  }
}
