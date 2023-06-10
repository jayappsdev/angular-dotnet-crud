import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDisplayComponent } from './charts-display.component';

describe('ChartsDisplayComponent', () => {
  let component: ChartsDisplayComponent;
  let fixture: ComponentFixture<ChartsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsDisplayComponent]
    });
    fixture = TestBed.createComponent(ChartsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
