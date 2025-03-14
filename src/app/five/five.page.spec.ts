import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FivePage } from './five.page';

describe('FivePage', () => {
  let component: FivePage;
  let fixture: ComponentFixture<FivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
