import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowActorInfoComponent } from './tv-show-actor-info.component';

describe('TvShowActorInfoComponent', () => {
  let component: TvShowActorInfoComponent;
  let fixture: ComponentFixture<TvShowActorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowActorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowActorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
