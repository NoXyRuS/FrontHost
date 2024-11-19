import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioVotante } from '../models/usuario-votante';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/votantes'; // Cambia esto según tu API
  private baseRec = 'http://localhost:5000';
  private userId: number | null = null;
  private user: UsuarioVotante | null = null;

  constructor(private http: HttpClient) {}

  // Método para establecer el ID del usuario
  setUserId(userId: number | null) {
    this.userId = userId;
  }

  // Método para establecer el usuario actual
  setUser(user: UsuarioVotante | null) {
    this.user = user;
  }
  getUserProfile(): Observable<UsuarioVotante> {
    const userId = localStorage.getItem('userId'); // Obtener userId desde localStorage
    if (userId) {
      return this.http.get<UsuarioVotante>(`${this.apiUrl}/${userId}`);
    }
    throw new Error('User ID not set');
  }

  logBiometrico(base64Image: string): Observable<any> {
    return this.http.post<any>(`${this.baseRec}/log_biometrico`, { image: base64Image });
  }

  obtenerUsuarioId(): number | null {
    // Aquí puedes obtener el ID del usuario desde localStorage o cualquier otra fuente
    const storedUserId = localStorage.getItem('userId'); // Supongo que almacenas el ID en localStorage
    return storedUserId ? parseInt(storedUserId, 10) : null;
  }
  
}