import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedPalcesComponent } from './visited-palces.component';

describe('VisitedPalcesComponent', () => {
  let component: VisitedPalcesComponent;
  let fixture: ComponentFixture<VisitedPalcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitedPalcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedPalcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
