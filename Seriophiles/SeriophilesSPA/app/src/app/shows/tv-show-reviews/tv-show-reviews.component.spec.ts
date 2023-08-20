import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowReviewsComponent } from './tv-show-reviews.component';

describe('TvShowReviewsComponent', () => {
  let component: TvShowReviewsComponent;
  let fixture: ComponentFixture<TvShowReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
