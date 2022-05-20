import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcomponentsComponent } from './mapcomponents.component';

describe('MapcomponentsComponent', () => {
  let component: MapcomponentsComponent;
  let fixture: ComponentFixture<MapcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapcomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
