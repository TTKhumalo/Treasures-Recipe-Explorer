import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class TutorComponent {
  formData = {
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    specialty: 'Italian',
    certification: '',
    motivation: ''
  };

  submitted = false;

  specialties = ['Italian', 'French', 'Asian', 'Mexican', 'Mediterranean', 'Indian', 'Middle Eastern'];

  submitApplication() {
    if (this.formData.fullName && this.formData.email && this.formData.phone && this.formData.experience) {
      this.submitted = true;
      alert(`Thank you ${this.formData.fullName}! Your application has been submitted. We'll review it and contact you within 48 hours.`);
      this.resetForm();
    } else {
      alert('Please fill in all required fields');
    }
  }

  resetForm() {
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      specialty: 'Italian',
      certification: '',
      motivation: ''
    };
    this.submitted = false;
  }
}
