import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class RecipeDetailComponent {
  recipeId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
