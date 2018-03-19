import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPlacesComponent } from './wanted-places.component';

describe('WantedPlacesComponent', () => {
  let component: WantedPlacesComponent;
  let fixture: ComponentFixture<WantedPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantedPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
