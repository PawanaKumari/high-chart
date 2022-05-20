import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcubeComponent } from './costcube.component';

describe('CostcubeComponent', () => {
  let component: CostcubeComponent;
  let fixture: ComponentFixture<CostcubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
