// src/app/recipes/recipes.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class RecipesComponent {
  recipes = [
    { id: 1, name: 'Spaghetti Bolognese' },
    { id: 2, name: 'Chicken Curry' },
    { id: 3, name: 'Beef Stew' }
  ];
}
