import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStatusComponent } from './events-status.component';

describe('EventsStatusComponent', () => {
  let component: EventsStatusComponent;
  let fixture: ComponentFixture<EventsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
