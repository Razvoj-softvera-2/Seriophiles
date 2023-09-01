import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowEpisodeInfoComponent } from './tv-show-episode-info.component';

describe('TvShowEpisodeInfoComponent', () => {
  let component: TvShowEpisodeInfoComponent;
  let fixture: ComponentFixture<TvShowEpisodeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowEpisodeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowEpisodeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
