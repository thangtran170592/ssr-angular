import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutComponent } from '@layouts/landing-layout/landing-layout.component';

describe('LandingLayoutComponent', () => {
  let component: LandingLayoutComponent;
  let fixture: ComponentFixture<LandingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
