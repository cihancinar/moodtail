import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceResultComponent } from './experience-result.component';

describe('ExperienceResultComponent', () => {
  let component: ExperienceResultComponent;
  let fixture: ComponentFixture<ExperienceResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceResultComponent]
    });
    fixture = TestBed.createComponent(ExperienceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
