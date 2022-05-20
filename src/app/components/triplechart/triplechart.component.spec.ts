import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplechartComponent } from './triplechart.component';

describe('TriplechartComponent', () => {
  let component: TriplechartComponent;
  let fixture: ComponentFixture<TriplechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriplechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriplechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
