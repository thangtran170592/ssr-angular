import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content1Component } from '@pages/project/content-1/content-1.component';

describe('Content1Component', () => {
  let component: Content1Component;
  let fixture: ComponentFixture<Content1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Content1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Content1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
