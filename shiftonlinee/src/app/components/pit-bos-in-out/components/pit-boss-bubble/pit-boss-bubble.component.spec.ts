import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitBossBubbleComponent } from './pit-boss-bubble.component';

describe('PitBossBubbleComponent', () => {
  let component: PitBossBubbleComponent;
  let fixture: ComponentFixture<PitBossBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitBossBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitBossBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
