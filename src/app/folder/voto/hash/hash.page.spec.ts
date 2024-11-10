import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HashPage } from './hash.page';

describe('HashPage', () => {
  let component: HashPage;
  let fixture: ComponentFixture<HashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
