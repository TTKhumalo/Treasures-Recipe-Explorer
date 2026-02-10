import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SchoolsComponent {
  schools = [
    { 
      id: 1, 
      name: 'Culinary Arts Academy', 
      location: 'New York, USA',
      rating: '5/5',
      courses: 'Professional Chef Training',
      image: '🏫',
      description: 'Premier culinary institute offering world-class training programs',
      enrollment: 'Open'
    },
    { 
      id: 2, 
      name: 'Le Cordon Bleu', 
      location: 'Paris, France',
      rating: '5/5',
      courses: 'French Culinary Arts',
      image: '🏫',
      description: 'Prestigious French culinary school with a century of excellence',
      enrollment: 'Open'
    },
    { 
      id: 3, 
      name: 'Institute of Gastronomy', 
      location: 'Dubai, UAE',
      rating: '4.8/5',
      courses: 'International Cuisine',
      image: '🏫',
      description: 'Modern facility offering diverse culinary programs',
      enrollment: 'Limited'
    },
    { 
      id: 4, 
      name: 'Tokyo Culinary School', 
      location: 'Tokyo, Japan',
      rating: '4.9/5',
      courses: 'Japanese & Asian Cuisine',
      image: '🏫',
      description: 'Specialized in authentic Asian cooking techniques',
      enrollment: 'Open'
    },
    { 
      id: 5, 
      name: 'Mediterranean Cooking College', 
      location: 'Barcelona, Spain',
      rating: '4.8/5',
      courses: 'Mediterranean Cuisine',
      image: '🏫',
      description: 'Focus on regional Mediterranean cooking traditions',
      enrollment: 'Open'
    },
    { 
      id: 6, 
      name: 'The Baking Institute', 
      location: 'Berlin, Germany',
      rating: '4.7/5',
      courses: 'Pastry & Baking',
      image: '🏫',
      description: 'Specialized baking and pastry arts programs',
      enrollment: 'Open'
    }
  ];

  enrollSchool(school: any) {
    alert(`You've shown interest in ${school.name}! Check your email for enrollment details.`);
  }
}
