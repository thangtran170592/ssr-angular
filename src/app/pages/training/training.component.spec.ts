import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from '@pages/training/training.component';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
