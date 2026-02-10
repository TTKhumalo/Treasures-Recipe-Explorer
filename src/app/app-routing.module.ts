// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: '**', redirectTo: '' }
];
