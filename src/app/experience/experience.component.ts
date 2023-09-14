import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  formData = {
    sexe: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log("wtfff");
    this.router.navigate(['experience-result']);
  }

}
