import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SevenPage } from './seven.page';

describe('SevenPage', () => {
  let component: SevenPage;
  let fixture: ComponentFixture<SevenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
