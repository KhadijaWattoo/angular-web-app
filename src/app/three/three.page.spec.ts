import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreePage } from './three.page';

describe('ThreePage', () => {
  let component: ThreePage;
  let fixture: ComponentFixture<ThreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
