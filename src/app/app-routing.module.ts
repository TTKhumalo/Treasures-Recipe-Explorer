// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { BookChefComponent } from './book-chef/book-chef.component';
import { TutorComponent } from './tutor/tutor.component';
import { SchoolsComponent } from './schools/schools.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'book-chef', component: BookChefComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: '**', redirectTo: '' }
];
