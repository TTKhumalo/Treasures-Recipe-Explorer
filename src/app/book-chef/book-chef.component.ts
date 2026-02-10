import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-chef',
  templateUrl: './book-chef.component.html',
  styleUrls: ['./book-chef.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BookChefComponent {
  chefs = [
    { id: 1, name: 'Chef Marco', specialty: 'Italian Cuisine', experience: '15 years', image: '👨‍🍳', price: '$150/hour' },
    { id: 2, name: 'Chef Maria', specialty: 'French Cooking', experience: '12 years', image: '👩‍🍳', price: '$180/hour' },
    { id: 3, name: 'Chef Hassan', specialty: 'Middle Eastern', experience: '10 years', image: '👨‍🍳', price: '$140/hour' },
    { id: 4, name: 'Chef Sofia', specialty: 'Mediterranean', experience: '8 years', image: '👩‍🍳', price: '$160/hour' }
  ];

  selectedChef: any = null;

  bookChef(chef: any) {
    this.selectedChef = chef;
    alert(`Great! You've selected ${chef.name}. A confirmation email will be sent to you shortly.`);
  }
}
