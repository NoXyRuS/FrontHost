import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../models/partido';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  private apiUrl = 'http://localhost:8080/api/partidos'; // Cambia esto según la URL de tu API

  constructor(private http: HttpClient) {}

  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener partidos', error);
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    );
  }
  
}
