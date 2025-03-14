import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EightPage } from './eight.page';

describe('EightPage', () => {
  let component: EightPage;
  let fixture: ComponentFixture<EightPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
