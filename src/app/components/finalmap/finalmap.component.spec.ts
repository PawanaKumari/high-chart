import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalmapComponent } from './finalmap.component';

describe('FinalmapComponent', () => {
  let component: FinalmapComponent;
  let fixture: ComponentFixture<FinalmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
