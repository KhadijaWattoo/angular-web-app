import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SixPage } from './six.page';

describe('SixPage', () => {
  let component: SixPage;
  let fixture: ComponentFixture<SixPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
