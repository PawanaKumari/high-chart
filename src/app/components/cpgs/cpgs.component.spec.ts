import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpgsComponent } from './cpgs.component';

describe('CpgsComponent', () => {
  let component: CpgsComponent;
  let fixture: ComponentFixture<CpgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
