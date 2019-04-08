import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonRoundComponent } from './buton-round.component';

describe('ButonRoundComponent', () => {
  let component: ButonRoundComponent;
  let fixture: ComponentFixture<ButonRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButonRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButonRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
