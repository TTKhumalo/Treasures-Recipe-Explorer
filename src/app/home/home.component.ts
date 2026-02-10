import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title(): string {
    return 'Treasures Recipe Explorer';
  }

  links = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/cli' }
  ];
}
