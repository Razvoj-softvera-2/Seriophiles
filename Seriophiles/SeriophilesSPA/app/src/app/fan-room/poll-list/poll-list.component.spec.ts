import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollListComponent } from './poll-list.component';

describe('PollListComponent', () => {
  let component: PollListComponent;
  let fixture: ComponentFixture<PollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
