import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';

describe('BreadcumbComponent', () => {
  let component: BreadcumbComponent;
  let fixture: ComponentFixture<BreadcumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
