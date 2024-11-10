import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotoPage } from './voto.page';

describe('VotoPage', () => {
  let component: VotoPage;
  let fixture: ComponentFixture<VotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
