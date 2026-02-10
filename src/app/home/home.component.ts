// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {
  title = 'Welcome to Treasures Recipe Explorer!';

  links = [
    { title: 'Explore Angular Docs', link: 'https://angular.io/docs' },
    { title: 'Angular Tutorials', link: 'https://angular.io/tutorial' },
    { title: 'CLI Reference', link: 'https://angular.io/cli' }
  ];
}
