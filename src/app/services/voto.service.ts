import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotoService {
  private resumenVoto = [];

  // Guardar la selección del voto
  setVoto(resumen: any) {
    this.resumenVoto = resumen;
  }

  // Obtener el resumen del voto
  getVoto() {
    return this.resumenVoto;
  }
}
