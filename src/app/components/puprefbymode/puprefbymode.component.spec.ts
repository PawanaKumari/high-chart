import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuprefbymodeComponent } from './puprefbymode.component';

describe('PuprefbymodeComponent', () => {
  let component: PuprefbymodeComponent;
  let fixture: ComponentFixture<PuprefbymodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuprefbymodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuprefbymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
