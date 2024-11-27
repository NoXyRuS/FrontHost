import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotoService {
  private apiUrl = 'http://134.209.74.110:8081/api/votos';

  constructor(private http: HttpClient) {}

  registrarVoto(voto: any) {
    return this.http.post<string>(this.apiUrl, voto); // El backend devuelve el hash como string
  }

  verificarVoto(hash: string) {
    return this.http.get<string>(`${this.apiUrl}/verificar`, {
      params: { hash },
    });
  }
}
