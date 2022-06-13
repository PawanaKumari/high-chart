import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidheatComponent } from './covidheat.component';

describe('CovidheatComponent', () => {
  let component: CovidheatComponent;
  let fixture: ComponentFixture<CovidheatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidheatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
