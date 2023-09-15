import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-experience-result',
  templateUrl: './experience-result.component.html',
  styleUrls: ['./experience-result.component.scss']
})
export class ExperienceResultComponent {
  constructor(private notifierService: NotifierService) {
  }

  onSelect() {
    
  }
}
