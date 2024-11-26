import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/candidato'; 

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  private apiUrl = 'http://localhost:8081/api/candidatos'; // Cambia esto según la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener todos los candidatos
  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  // Método para obtener candidatos por idPartido
  getCandidatosByPartido(partyId: number): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${this.apiUrl}/partido/${partyId}`); // Ajusta la URL según tu API
  }

  // Método para obtener un candidato por ID
  getCandidatoById(candidatoId: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.apiUrl}/${candidatoId}`);
  }

  // Método para crear un nuevo candidato
  crearCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.apiUrl, candidato);
  }

  // Método para actualizar un candidato existente
  actualizarCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.apiUrl}/${candidato.idCandidato}`, candidato);
  }

  // Método para eliminar un candidato
  eliminarCandidato(candidatoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${candidatoId}`);
  }
}
