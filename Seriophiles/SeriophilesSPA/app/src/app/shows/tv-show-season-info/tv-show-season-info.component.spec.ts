import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSeasonInfoComponent } from './tv-show-season-info.component';

describe('TvShowSeasonInfoComponent', () => {
  let component: TvShowSeasonInfoComponent;
  let fixture: ComponentFixture<TvShowSeasonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowSeasonInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowSeasonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
