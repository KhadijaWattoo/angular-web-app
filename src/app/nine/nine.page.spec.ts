import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NinePage } from './nine.page';

describe('NinePage', () => {
  let component: NinePage;
  let fixture: ComponentFixture<NinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
