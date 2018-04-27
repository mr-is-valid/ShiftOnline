import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitBosInOutComponent } from './pit-bos-in-out.component';

describe('PitBosInOutComponent', () => {
  let component: PitBosInOutComponent;
  let fixture: ComponentFixture<PitBosInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitBosInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitBosInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
