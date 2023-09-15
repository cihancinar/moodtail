import { Component, OnInit } from '@angular/core';
import { ConfirmBoxEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-experience-result',
  templateUrl: './experience-result.component.html',
  styleUrls: ['./experience-result.component.scss']
})
export class ExperienceResultComponent implements OnInit {
  images = [
    "Dynamo Twist",
    "Fearless Fizz",
    "Fizzy Fiesta",
    "Happy Go Lucky",
    "Mate's Memento",
    "Sip of Sunshine",
    "Soothe Spirit"
  ]

  selectedImages: any;
  isLoading = true;

  constructor(private confirmBoxEvokeService: ConfirmBoxEvokeService) {
    this.getRandomImages(this.images);
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.changeBooleanState();
    }, 1500);
  }

  private changeBooleanState() {
    this.isLoading = false;
  }
  
  onSelect() {
    this.confirmBoxEvokeService.success('Your moodtail has been sent to the bartender!', 'Please go to the bottom of the page to try to win a new coctail.!', 'Close', '')
            .subscribe(resp => console.log('resp', resp));
  }

  getRandomImages(images: any) {
    // Create a copy of the original array
    var copy = images.slice();
  
    // Shuffle the array using Fisher-Yates algorithm
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
  
    // Return the first 3 elements of the shuffled array
    this.selectedImages = copy.slice(0, 3);
    console.log(this.selectedImages)
  }

}
