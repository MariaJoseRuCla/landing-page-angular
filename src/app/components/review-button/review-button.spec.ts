import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewButton } from './review-button';

describe('ReviewButton', () => {
  let component: ReviewButton;
  let fixture: ComponentFixture<ReviewButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
