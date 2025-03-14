import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenPage } from './ten.page';

describe('TenPage', () => {
  let component: TenPage;
  let fixture: ComponentFixture<TenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
