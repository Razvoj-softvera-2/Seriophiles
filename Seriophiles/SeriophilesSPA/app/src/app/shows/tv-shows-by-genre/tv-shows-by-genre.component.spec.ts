import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsByGenreComponent } from './tv-shows-by-genre.component';

describe('TvShowsByGenreComponent', () => {
  let component: TvShowsByGenreComponent;
  let fixture: ComponentFixture<TvShowsByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsByGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowsByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
