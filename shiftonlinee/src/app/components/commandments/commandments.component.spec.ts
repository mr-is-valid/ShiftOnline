import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmentsComponent } from './commandments.component';

describe('CommandmentsComponent', () => {
  let component: CommandmentsComponent;
  let fixture: ComponentFixture<CommandmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
