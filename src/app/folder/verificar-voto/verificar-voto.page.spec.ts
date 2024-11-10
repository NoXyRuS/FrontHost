import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificarVotoPage } from './verificar-voto.page';

describe('VerificarVotoPage', () => {
  let component: VerificarVotoPage;
  let fixture: ComponentFixture<VerificarVotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarVotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
