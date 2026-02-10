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
    { id: 1, name: 'Spaghetti Bolognese', image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', description: 'Classic Italian pasta with rich meat sauce', time: '30 mins', difficulty: 'Easy' },
    { id: 2, name: 'Chicken Curry', image: 'https://images.pexels.com/photos/8634307/pexels-photo-8634307.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', description: 'Creamy and aromatic Indian spiced chicken', time: '45 mins', difficulty: 'Medium' },
    { id: 3, name: 'Beef Stew', image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', description: 'Hearty slow-cooked beef with vegetables', time: '2 hours', difficulty: 'Medium' },
    { id: 4, name: 'Vegetable Stir Fry', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', description: 'Quick and colorful vibrant vegetables', time: '20 mins', difficulty: 'Easy' },
    { id: 5, name: 'Grilled Salmon', image: 'https://images.pexels.com/photos/2639914/pexels-photo-2639914.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', description: 'Restaurant-quality herb-crusted salmon', time: '35 mins', difficulty: 'Medium' },
    { id: 6, name: 'Chocolate Brownies', image: 'https://images.pexels.com/photos/1056523/pexels-photo-1056523.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', description: 'Fudgy and decadent chocolate treats', time: '40 mins', difficulty: 'Easy' }
  ];
}
